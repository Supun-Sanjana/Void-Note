"use client";

import { Plus, Trash2, CheckCircle2, Pencil, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import HashLoader from "react-spinners/HashLoader";
import { motion, AnimatePresence } from "framer-motion";
import { useTasks } from "@/app/hooks/useTasks";
import { useAddTask } from "@/app/hooks/useAddTask";
import { useDeleteTask } from "@/app/hooks/useDeleteTask";
import { useUpdateTask } from "@/app/hooks/useUpdateTask";

const priorityColors: Record<string, string> = {
  High: "bg-red-900 text-red-300",
  Mid: "bg-yellow-900 text-yellow-200",
  Low: "bg-blue-900 text-blue-300",
};

const statusColors: Record<string, string> = {
  InProgress: "text-blue-400",
  Completed: "text-green-400",
  Pause: "text-yellow-400",
};

const Task = () => {
  const [addTask, setAddTask] = useState(false);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      title: "",
      details: "",
      priority: "Low",
      due_date: new Date().toISOString().split("T")[0], // today’s date
    },
  });

  const { data: tasks, isLoading, error } = useTasks();

  const addTaskMutation = useAddTask();
  const deleteTaskMutation = useDeleteTask();
  const updateTaskMutation = useUpdateTask();

  const onSubmit = (taskData: any) => {
    addTaskMutation.mutate(taskData);
    setAddTask(false);
    reset({
      title: "",
      details: "",
      priority: "Low",
      due_date: new Date().toISOString().split("T")[0],
    });
  };

  if (error) return toast.error("Error fetching tasks!");
  if (isLoading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <HashLoader color="#4F46E5" size={50} />
      </div>
    );

  return (
    <>
      {/* Task Input */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
        <div className="w-full h-[170px] bg-[#141414] px-[30px] rounded-2xl border border-[#3A3D47]">
          <div className="flex gap-2 py-[40px] px-[30px]">
            <input
              {...register("title", { required: true })}
              placeholder="Add a new task ..."
              type="text"
              className="pl-[20px] w-full border-[1px] rounded-[5px] mr-3 border-[#3A3D47] bg-transparent text-white"
            />
            <button
              type="button"
              onClick={() => setAddTask(true)}
              className="flex gap-2 bg-[#676BEB] px-6 py-1 rounded-[5px] cursor-pointer text-white"
            >
              <Plus /> Add
            </button>
          </div>
          <p className="flex justify-center text-[#717171] text-sm">
            Press enter to quickly add, or click ‘Add Task’
          </p>
        </div>
      </form>

      {/* Delete All */}
      <div className="action flex justify-end my-7">
        <button
          className="flex items-center gap-2 bg-red-900 px-4 py-2 rounded text-red-300 hover:bg-red-800 transition"
          onClick={() => toast.info("Delete All coming soon")}
        >
          <Trash2 size={17} /> Delete All
        </button>
      </div>

      {/* Task Add Modal */}
      {addTask && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          onClick={() => setAddTask(false)}
        >
          <div
            className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-white text-lg mb-3">Add New Task</h2>

            <label className="block text-white mb-1">Title</label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
              className="w-full px-3 py-2 mb-4 rounded bg-[#2a2a2a] text-white border border-[#3A3D47]"
            />

            <label className="block text-white mb-1">Details</label>
            <input
              {...register("details", { required: true })}
              type="text"
              placeholder="Details"
              className="w-full px-3 py-2 mb-4 rounded bg-[#2a2a2a] text-white border border-[#3A3D47]"
            />

            <div className="flex justify-between gap-4">
              <div className="flex-1">
                <label className="block text-white mb-1">Priority</label>
                <select
                  {...register("priority", { required: true })}
                  className="w-full px-3 py-2 mb-4 rounded bg-[#2a2a2a] text-white border border-[#3A3D47]"
                >
                  <option value="High">High</option>
                  <option value="Mid">Mid</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-white mb-1">Due Date</label>
                <input
                  type="date"
                  {...register("due_date", {
                    required: "Please select a valid date",
                  })}
                  className="w-full px-3 py-2 mb-4 rounded bg-[#2a2a2a] text-white border border-[#3A3D47]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-1 bg-gray-600 text-white rounded"
                onClick={() => setAddTask(false)}
              >
                Cancel
              </button>
              <input
                onClick={handleSubmit(onSubmit)}
                type="submit"
                value="Save"
                className="px-4 py-1 bg-[#676BEB] text-white rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* Task List */}
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {tasks && tasks.length > 0 ? (
            tasks.map((task: any) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#1a1a1a] p-5 rounded-xl border border-[#3A3D47] shadow-md hover:border-[#676BEB] transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white truncate">
                      {task.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{task.details}</p>
                  </div>
                  <button
                    onClick={() => deleteTaskMutation.mutate(task.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded ${
                      priorityColors[task.priority]
                    }`}
                  >
                    {task.priority}
                  </span>
                  <span className="text-gray-400">{task.due_date}</span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className={`${statusColors[task.status]} text-sm`}>
                    {task.status}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        updateTaskMutation.mutate({
                          id: task.id,
                          data: { status: "Completed" },
                        })
                      }
                      className="p-1 bg-green-800 rounded hover:bg-green-700 transition"
                    >
                      <CheckCircle2 size={16} className="text-white" />
                    </button>
                    <button
                      onClick={() => {
                        setAddTask(true);
                        reset({
                          title: task.title,
                          details: task.details,
                          priority: task.priority,
                          due_date: task.due_date?.split("T")[0],
                        });
                      }}
                      className="p-1 bg-yellow-700 rounded hover:bg-yellow-600 transition"
                    >
                      <Pencil size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center w-full mt-5">
              No tasks yet.
            </p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Task;
