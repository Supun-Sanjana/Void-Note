"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export interface TaskInput {
  title: string;
  details: string;
  priority: "Low" | "Mid" | "High";
  due_date: string;
}

export const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, TaskInput>({
    mutationFn: async (taskData: TaskInput) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token provided");

      const res = await axios.post("/api/tasks", taskData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    },
    onSuccess: () => {
      toast.success("Task added!");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

    },
    onError: (err: any) => toast.error(err.message || "Failed to add task"),
  });
};
