import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_MODE === "production"
    ? "https://www.achillexai.academy"
    : "http://localhost:3000";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete("admin_token");

  return NextResponse.redirect(new URL("/admin/login", BASE_URL));
}
