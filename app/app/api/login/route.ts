
import { DB } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return Response.json({ message: "Some fields are missing..." }, { status: 400 });
    }

    const user = await DB.user.findFirst({
      where: { Username: username },
    });

    if (!user) {
      return Response.json({ message: "User Not Found!" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.Password);

    if (!isMatch) {
      return Response.json({ message: "Password is wrong!" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.User_Id, username: user.Username }, // 👈 consistent `id`
      process.env.JWT_SECRET ||
        "wjb437nhgvbcgx2bjucbngjxh32bvhxjngvhdwj6nbxwvdx45562vghbxbfw45cfghxfcgsxs",
      { expiresIn: "24h" }
    );

    return Response.json({ message: "Success", token }, { status: 200 });
  } catch (e: any) {
    return Response.json({ message: "Try again", error: e.message }, { status: 500 });
  }
}
