import { DB } from "@/lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";


export async function POST(request: Request){
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
         return Response.json({ message: "Unauthorized" }, { status: 401 });
      }

      const userId = decoded.id;

      const {title, details, priority, due_date} =await request.json();

      if (!title ) {
        return Response.json({ message: "Title is required !" }, { status: 400 });
      }

      try {
        const newTask =await DB.task.create({
            data:{
                Title:title,
                Details:details,
                Priority:priority,
                Due_Date:new Date (due_date),
                user:{
                   connect:{ User_Id:userId}
                }
            }
        })

        return Response.json({ message: "Task created", newTask }, { status: 201 });
      } catch (e:any) {
        console.log(e.message);

      }
}