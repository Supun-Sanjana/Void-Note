// Fetching tasks

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export interface Task {
  id: number;
  title: string;
  status: "InProgress" | "Completed" | "Pause";
  priority: "Low" | "Mid" | "High";
  due_date: string;
}

interface TokenPayload {
  id: number;
  username: string;
}

const updateTask = async (): Promise<Task[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token provided");

  const decoded: TokenPayload = jwtDecode(token);
  const userId = decoded.id;

  const res = await axios.get(`/api/tasks?userId=${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.tasks.map((t: any) => ({
    id: t.Task_Id,
    title: t.Title,
    status: t.Status,
    priority: t.Priority,
    due_date: t.Due_Date ? new Date(t.Due_Date).toLocaleDateString() : "",
  }));
};

export const useTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: updateTask,
  });
};
