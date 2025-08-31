"use client"

import { Plus, Trash2 } from 'lucide-react'
import React, {  useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { getColumnsWithDelete } from "./columns"
import { DataTable } from "./data-table"
import HashLoader from 'react-spinners/HashLoader';
import { useTasks } from "@/app/hooks/useTasks";
import { useAddTask } from "@/app/hooks/useAddTask";
import { useDeleteTask } from '@/app/hooks/useDeleteTask';


const Task = () => {
    const [addTask, setAddTask] = useState(false);
    const { handleSubmit, register, reset } = useForm();
    const { data: tasks, isLoading, error } = useTasks();

    const addTaskMutation = useAddTask();
    const deleteTaskMutation = useDeleteTask();

    const columns = getColumnsWithDelete((id: number) => deleteTaskMutation.mutate(id));

    const onSubmit = (taskData: any) => {
        addTaskMutation.mutate(taskData);
        setAddTask(false);
        reset({ title: "", details: "", priority: "Low", due_date: "" });
    };

    if (error) return (toast.error("Error fetching tasks !"), null);
    if (isLoading) return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="flex flex-col items-center space-y-4">
                    <HashLoader color="#4F46E5" size={50} />
                </div>
            </div>
        </div>
    )

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='mb-5'>

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

                <div className="action flex justify-end my-7">
                    <div className="w-30 h-7 bg-red-900 rounded border-0 border-white flex justify-center mt-3 items-center gap-2 text-red-300 cursor-pointer">
                        <Trash2 size={17} />
                        <button className='cursor-pointer'> Delete All  </button>
                    </div>

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

            <DataTable columns={columns} data={tasks ?? []} />

        </>
    )
}

export default Task
