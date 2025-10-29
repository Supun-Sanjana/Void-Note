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




export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const {id} =await params;
  const body = await request.json();
  const { title, details, priority, status, due_date } = body;

  try {
    const updated = await DB.task.update({
      where: { Task_Id: Number(id) },
      data: {
        Title: title,
        Details: details,
        Priority: priority,
        Status: status,
        Due_Date: due_date ? new Date(due_date) : null,
      },
    });
    return Response.json({ message: "Task updated", updated }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Failed to update" }, { status: 500 });
  }
}
