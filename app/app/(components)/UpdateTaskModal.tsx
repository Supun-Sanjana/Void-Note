// components/UpdateTaskModal.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

interface UpdateTaskModalProps {
  isOpen: boolean;
  task: any;
  onClose: () => void;
  onUpdated: () => void; // callback to refresh table
}

export function UpdateTaskModal({ isOpen, task, onClose, onUpdated }: UpdateTaskModalProps) {
  const [title, setTitle] = useState(task?.title || "");

  const handleUpdate = async () => {
    if (!task) return;
    await axios.put(`/api/tasks/${task.id}`, { title }); // adjust route & body
    onUpdated();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
        </DialogHeader>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button onClick={handleUpdate} className="mt-4">Save</Button>
      </DialogContent>
    </Dialog>
  );
}
