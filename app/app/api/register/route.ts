import { DB } from "@/lib/prisma";
import bcrypt from "bcryptjs";



export async function POST(request: Request) {
  const { first_name, last_name, username, email, password } =
    await request.json();

  if (!first_name || !last_name || !username || !email || !password) {
    return Response.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
   const existingUser = await DB.user.findFirst({
  where: {
    OR: [
      { Username: username },
      { Email: email }
    ],
  },
});


    if (existingUser) {
      return Response.json(
        { message: "Username or email is already registered!" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await DB.user.create({
      data: {
        First_Name: first_name,
        Last_Name: last_name,
        Username: username,
        Email: email,
        Password: hashedPassword,
      },
    });

    return Response.json({ message: "user created" }, { status: 201 });
  } catch (error: any) {
    console.log(error.message);
  }
}
