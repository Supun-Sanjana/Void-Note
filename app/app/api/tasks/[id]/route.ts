import { DB } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {

    const { id } = context.params;
    const taskId = Number(id); // 👈 must be params.id

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

