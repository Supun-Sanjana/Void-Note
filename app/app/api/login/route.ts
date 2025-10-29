import { DB } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return Response.json({ success: false, message: "Some fields are missing." }, { status: 400 });
    }

    const user = await DB.user.findFirst({ where: { Username: username } });
    if (!user) {
      return Response.json({ success: false, message: "User not found." }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return Response.json({ success: false, message: "Incorrect password." }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.User_Id, username: user.Username },
      process.env.JWT_SECRET || "fallback_secret_key",
      { expiresIn: "24h" }
    );

    return Response.json({ success: true, message: "Login successful", token }, { status: 200 });
  } catch (e: any) {
    console.error("Login API error:", e);
    return Response.json({ success: false, message: "Server error", error: e.message }, { status: 500 });
  }
}
