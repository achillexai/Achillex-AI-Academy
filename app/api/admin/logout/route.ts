import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete("admin_token");

  return NextResponse.redirect(
    new URL("/admin/login", "http://localhost:3000")
  );
}
