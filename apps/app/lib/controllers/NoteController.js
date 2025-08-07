import DB from '@/lib/prisma';

export const createNote = async ({ title, content, userId }) => {
  if (!title || !content || !userId) {
    throw new Error("Some fields are missing");
  }

  const newNote = await DB.Note.create({
    data: {
      Title: title,
      Content: content,
      User_Id: userId,
    },
  });

  return {
    message: "Note created successfully.",
    note: {
      id: newNote.Note_Id,
      title: newNote.Title,
    },
  };
};

export const updateNote = async (noteId, { title, content }) => {
  if (!title && !content) {
    throw new Error("Nothing to update.");
  }

  const updatedNote = await DB.Note.update({
    where: { Note_Id: Number(noteId) },
    data: {
      ...(title && { Title: title }),
      ...(content && { Content: content }),
    },
  });

  return {
    message: "Note updated successfully.",
    note: updatedNote,
  };
};

export const deleteNote = async (noteId) => {
  await DB.Note.delete({
    where: {
      Note_Id: Number(noteId),
    },
  });

  return { message: "Note deleted successfully." };
};

export const getAllNotes = async (userId) => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const notes = await DB.Note.findMany({
    where: { User_Id: userId },
    orderBy: { Created_At: 'desc' },
  });

  return {
    message: "Notes fetched successfully",
    notes,
  };
};

export const getNoteById = async (userId, noteId) => {
  if (!noteId || !userId) {
    throw new Error("Note ID and User ID are required");
  }

  const note = await DB.Note.findFirst({
    where: {
      Note_Id: noteId,
      User_Id: userId,
    },
  });

  if (!note) {
    throw new Error("Note not found");
  }

  return {
    message: "Note fetched successfully",
    note,
  };
};
