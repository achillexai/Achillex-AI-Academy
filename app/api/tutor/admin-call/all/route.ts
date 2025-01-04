import { db } from "@/utils/db";
import { Tutor } from "@/utils/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deletedTutors = await db.delete(Tutor).returning();

    return NextResponse.json(deletedTutors);
  } catch (error) {
    console.log("[TUTOR_DELETE_ALL]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
