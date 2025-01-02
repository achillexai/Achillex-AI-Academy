import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  cookieStore.delete("admin_token");

  // Get the host from the request headers
  const host = request.headers.get("host") || "achillexai.academy";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  // Use the current domain for redirect
  return NextResponse.redirect(
    new URL("/admin/login", `${protocol}://${host}`)
  );
}
