import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const cookieStore = cookies();
    cookieStore.set("admin_token", "your_secure_token_here", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // Change from "strict" to "lax"
      maxAge: 3600, // 1 hour
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}

export async function GET(request: Request) {
  const cookieStore = cookies();
  const host = request.headers.get("host") || "";
  const domain = host.includes("localhost") ? "localhost" : host.split(":")[0];

  cookieStore.set("admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
    domain: domain,
  });

  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  return NextResponse.redirect(
    new URL("/admin/login", `${protocol}://${host}`)
  );
}
