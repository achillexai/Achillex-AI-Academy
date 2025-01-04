import { db } from "@/utils/db";
import { Category } from "@/utils/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await db.query.Category.findMany();

    return NextResponse.json(categories);
  } catch (error) {
    console.error("[CATEGORIES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
