import { createNote } from "@/lib/controllers/NoteController";
import DB from "@/lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";


export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];


  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET ||
      "wjb437nhgvbcgx2bjucbngjxh32bvhxjngvhdwj6nbxwvdx45562vghbxbfw45cfghxfcgsxs"
  ) as JwtPayload;

  if (typeof decoded === "string" || !("id" in decoded)) {
    throw new Error("Invalid token payload");
  }

  if (!decoded) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = decoded.id;
  const { title, content } = await request.json();


  if (!title || !content) {
    return Response.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const newNote =await DB.note.create({
      data: {
        Title: title,
        Content: content,
        User_Id: userId, // link note to user
      },
    });

    return Response.json({ message: "Note created", newNote }, { status: 201 });

  } catch (error) {
    console.error("Error creating note:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
