"use client"

import axios from 'axios';
import { Plus, Square, SquareCheck } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { columns, TasksTable } from "./columns"
import { DataTable } from "./data-table"
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
    id: number;
    username: string;
}

const Task = () => {
    const [addTask, setAddTask] = useState(false);
    const [data, setData] = useState<TasksTable[]>([]);
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        getData();
    }, []);

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

    const getData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error("No token provided!")
                return;
            }

            const decoded: TokenPayload = jwtDecode(token);
            const userId = decoded.id;

            const res = await axios.get(`/api/tasks?userId=${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const tasks = res.data.tasks.map((t: any) => ({
                id: t.Task_Id,
                title: t.Title,
                status: t.Status,
                priority: t.Priority,
                due_date: t.Due_Date ? new Date(t.Due_Date).toLocaleDateString() : "",
            }));

            setData(tasks);

            return;

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.")

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className='mb-5'>

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

            <DataTable columns={columns} data={data} />



        </>
    )
}

export default Task
