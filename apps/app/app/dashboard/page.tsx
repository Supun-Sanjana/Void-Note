import React from 'react'
import { Plus, SquareCheck, Square } from 'lucide-react';

const page = () => {
    return (
        <div className='bg-black mx-10'>

            <div className='w-full h-[170px]  bg-[#141414] px-[30px] rounded-2xl border-1 border-[#3A3D47]'>
                <div className='flex gap-2 py-[40px] px-[30px]'>
                    <input placeholder='Add a new task ...' type="text" className='pl-[20px] w-full border-[1px] rounded-[5px] mr-3 border-[#3A3D47]' />
                    <button className='flex gap-2 bg-[#676BEB] px-6 py-1 rounded-[5px]'><Plus /> Add   </button>
                </div>
                <p className='flex justify-center text-[#717171]'>Press enter to quickly add , or click ‘Add Task’ </p>

            </div>

            <div className="felx-2 flex gap-10 mt-10 ">
                <div className="p-4 left-panel flex-1 h-full rounded-[10px] bg-[#141414] border border-[#3A3D47]">
                    <h2 className='text-2xl'>Recent Tasks</h2>
                    <p className='text-[#8F8F8F] pb-7 mb-5 border-b border-[#3A3D47]'>Manage your priorities and daily tasks.</p>


                    <div>
                        <h2 className='pb-4 my-3'>Pending</h2>
                        <div className="task flex">
                            <Square />
                            <p className='ml-2 flex-wrap'>Prepare for React component architecture workshop</p>
                        </div>

                    </div>

                    <div>
                        <h2 className='py-4 my-3'>Completed</h2>
                        <div className="task flex">
                            <SquareCheck />
                            <p className='ml-2 flex-wrap'>Prepare for React component architecture workshop</p>

                        </div>

                    </div>

                </div>
                <div className="p-4 right-panel flex-1 h-full rounded-[10px] bg-[#141414] border-1 border-[#3A3D47]">
                    <h2 className='text-2xl'>Recent Notes</h2>
                    <p className='text-[#8F8F8F] mb-5 pb-7 border-b border-[#3A3D47]'>Quick access to your latest thoughts.</p>

                    <div className="note w-full h-full py-3 px-5 rounded-2xl pb-7 bg-[#040404]">
                        <h2 className='text-2xl py-3'>Meeting Notes: Q2 Review</h2>
                        <p>Key takeaways from Q2 performance review: focus on user engagement, streamline onboarding, and expand community features. Next steps include A/B testing new signup flows.</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default page
