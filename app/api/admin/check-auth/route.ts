import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/jwt";

export async function GET(request: Request) {
  const token = cookies().get("admin_token")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, user: decoded });
}
