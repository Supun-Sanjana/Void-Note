// hooks/useUpdateTaskModal.tsx
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  status: "InProgress" | "Completed";
  priority: "Low" | "Mid" | "High";
  due_date: string;
};

export const useUpdateTaskModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Task | null>(null);

  const openModal = (task: Task) => {
    setTask(task);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTask(null);
  };

  return { isOpen, task, openModal, closeModal };
};
