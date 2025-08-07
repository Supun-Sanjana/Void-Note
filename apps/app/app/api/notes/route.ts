import { NextResponse } from 'next/server';
import { getAllNotes, createNote } from '@/lib/controllers/NoteController';

// GET: /api/notes?userId=123
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = Number(searchParams.get('userId'));

    const result = await getAllNotes(userId);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: /api/notes
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await createNote(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
