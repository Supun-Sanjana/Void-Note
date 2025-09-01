import { DB } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The context type must be "context: { params: { id: string } }"
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const taskId = Number(id);

  try {
    await DB.task.delete({
      where: {
        Task_Id: taskId,
      },
    });

    return NextResponse.json({ message: "Deleted!" }, { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
