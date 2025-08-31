import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, number>({
    mutationFn: async (taskId: number) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token provided");

      await axios.delete(`/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      toast.success("Task deleted!");
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // ✅ TS-safe
    },
    onError: (err: any) => toast.error(err.message || "Failed to delete task"),
  });
};
