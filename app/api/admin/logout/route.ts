import { NextResponse } from "next/server";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_MODE === "production"
    ? "https://www.achillexai.academy"
    : "http://localhost:3000";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return response;
}

export async function GET() {
  const response = NextResponse.redirect(new URL("/admin/login", BASE_URL));
  response.cookies.set("admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return response;
}
