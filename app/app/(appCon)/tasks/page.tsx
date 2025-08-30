"use client"

import axios from 'axios';
import { Plus, Square, SquareCheck } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type Priority = "Low" | "Medium" | "High";
type Status = "Pending" | "InProgress" | "Completed";

interface Tasks {
    title: string,
    details?: string,
    priority: Priority,
    status: Status
}

const Task = () => {

    const [addTask, setAddTask] = useState(false);

    const { handleSubmit, register, reset } = useForm();

const submit = async (taskData: object) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("No token provided !");
    return;
  }

  try {
    const res = await axios.post(
      "/api/tasks",
      taskData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 201) {
      toast.success("Task created !");
      setAddTask(false);


       reset({ title: "", details: "", priority: "Low", due_date: "" });
    }
  } catch (err: any) {
    toast.error(err.message);
  }
};


    return (
        <>
            <form onSubmit={handleSubmit(submit)}>

                <div className='w-full h-[170px]  bg-[#141414] px-[30px] rounded-2xl border-1 border-[#3A3D47]'>
                    <div className='flex gap-2 py-[40px] px-[30px]'>
                        <input
                            {...register("title",
                                { required: true }
                            )}
                            placeholder='Add a new task ...'
                            type="text"
                            className='pl-[20px] w-full border-[1px] rounded-[5px] mr-3 border-[#3A3D47]'
                        />
                        <button className='flex gap-2 bg-[#676BEB] px-6 py-1 rounded-[5px] cursor-pointer'
                            onClick={() => setAddTask(true)}
                        ><Plus /> Add   </button>
                    </div>
                    <p className='flex justify-center text-[#717171]'>Press enter to quickly add , or click ‘Add Task’ </p>
                </div>

                {addTask && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
                        onClick={() => setAddTask(false)}
                    >
                        <div
                            className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-[600px]"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                        >
                            <h2 className="text-white text-lg mb-3">Add New Task</h2>

                            {/* Title */}
                            <label htmlFor="title" className="block text-white mb-1">Title</label>
                            <input
                                id="title"
                                {...register("title", { required: true })}
                                type="text"
                                placeholder="Title"
                                className="w-full px-3 py-2 mb-4 rounded bg-[#2a2a2a] text-white border border-[#3A3D47]"
                            />

                            {/* Details */}
                            <label htmlFor="details" className="block text-white mb-1">Details</label>
                            <input
                                id="details"
                                {...register("details", { required: true })}
                                type="text"
                                placeholder="Details"
                                className="w-full px-3 py-2 mb-4 rounded bg-[#2a2a2a] text-white border border-[#3A3D47]"
                            />

                            <div className="flex justify-between gap-4">
                                {/* Priority */}
                                <div className="flex-1">
                                    <label htmlFor="priority" className="block text-white mb-1">Priority</label>
                                    <select
                                        id="priority"
                                        {...register("priority", { required: true })}
                                        className="w-full px-3 py-2 mb-4 rounded bg-[#2a2a2a] text-white border border-[#3A3D47]"
                                    >
                                        <option value="High">High</option>
                                        <option value="Mid">Mid</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>

                                {/* Due Date */}
                                <div className="flex-1">
                                    <label htmlFor="due_date" className="block text-white mb-1">Due Date</label>
                                    <input
                                        id="due_date"
                                        type="date"
                                        {...register("due_date", { required: true })}
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
                                <input type='submit' value=" Save" className="px-4 py-1 bg-[#676BEB] text-white rounded" />


                            </div>
                        </div>
                    </div>
                )}

            </form>



            <div className="content">
                <h2 className="text-2xl mt-10 ml-2">Tasks</h2>
                <div className="mt-5 space-y-3">
                    {/* Task Item */}
                    <div className="task flex items-center text-white bg-[#040404] p-2 rounded-[5px]">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="peer sr-only" />

                            <div className="w-5 h-5 border-2 border-[#676BEB] rounded-sm flex items-center justify-center
                                            peer-checked:bg-[#676BEB] transition-colors">
                                <svg className="hidden w-3 h-3 text-white peer-checked:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <span className="peer-checked:line-through peer-checked:text-gray-400">
                                Complete this task
                            </span>
                        </label>
                    </div>


                    <div className="task flex items-center text-white bg-[#040404] p-2 rounded-[5px]">
                        <Square style={{ color: '#676BEB' }} />
                        <p className="ml-2">Design new user onboarding flow</p>
                    </div>

                    <div className="task flex items-center text-white bg-[#040404] p-2 rounded-[5px]">
                        <Square style={{ color: '#676BEB' }} />
                        <p className="ml-2">Update project documentation</p>
                    </div>

                    <div className="task flex items-center text-white bg-[#040404] p-2 rounded-[5px]">
                        <Square style={{ color: '#676BEB' }} />
                        <p className="ml-2">Fix bugs in the authentication module</p>
                    </div>

                    <div className="task flex items-center text-white bg-[#040404] p-2 rounded-[5px]">
                        <Square style={{ color: '#676BEB' }} />
                        <p className="ml-2">Plan Q3 marketing strategy</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Task
