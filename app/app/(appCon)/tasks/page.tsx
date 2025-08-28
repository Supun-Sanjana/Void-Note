import { Plus, Square, SquareCheck } from 'lucide-react'
import React from 'react'

const Task = () => {

    return (
        <>

            <div className='w-full h-[170px]  bg-[#141414] px-[30px] rounded-2xl border-1 border-[#3A3D47]'>
                <div className='flex gap-2 py-[40px] px-[30px]'>
                    <input placeholder='Add a new task ...' type="text" className='pl-[20px] w-full border-[1px] rounded-[5px] mr-3 border-[#3A3D47]' />
                    <button className='flex gap-2 bg-[#676BEB] px-6 py-1 rounded-[5px]'><Plus /> Add   </button>
                </div>
                <p className='flex justify-center text-[#717171]'>Press enter to quickly add , or click ‘Add Task’ </p>
            </div>

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
