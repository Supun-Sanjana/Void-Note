// app/lib/utils/jwt.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "wjb437nhgvbcgx2bjucbngjxh32bvhxjngvhdwj6nbxwvdx45562vghbxbfw45cfghxfcgsxs";

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // usually an object containing user info, e.g., { userId, email, iat, exp }
  } catch (err) {
    console.error("Error verifying token:", err);
    return null;
  }
};
