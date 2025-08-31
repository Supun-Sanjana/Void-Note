import { DB } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {

    const { id } = await params;
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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
    const { id } = await params;
    const taskId = Number(id);

  try {
    const body = await request.json();
    const { title, status,details, priority, due_date } = body;

    const updatedTask = await DB.task.update({
      where: {
        Task_Id: taskId,
      },
      data: {
        Title:title,
        Details:details,
        Status:status,
        Priority:priority,
        Due_Date:due_date,
      },
    });

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}