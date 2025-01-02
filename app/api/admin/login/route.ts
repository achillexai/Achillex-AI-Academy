import { NextResponse } from "next/server";
import { generateToken } from "@/utils/jwt";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = generateToken({ username, role: "admin" });

    const response = NextResponse.json({ success: true, token });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
