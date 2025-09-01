import { DB } from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // 👈 must await, params is a Promise now
  const taskId = Number(id);

  try {
    await DB.task.delete({
      where: { Task_Id: taskId },
    });

    return NextResponse.json({ message: "Deleted!" }, { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
