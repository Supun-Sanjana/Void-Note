import React from 'react'
import { Copyright , SquareCheck, Square, BookText, ListTodo, LayoutDashboard, Calendar, WifiOff } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <div className="bg-black min-h-screen px-10 py-6">

        <div className="flex gap-10 mt-10">
          {/* Left Panel */}
          <div className="p-4 flex-1 rounded-[10px] bg-[#141414] border border-[#3A3D47]">
            <h2 className="text-2xl">Recent Tasks</h2>
            <p className="text-[#8F8F8F] pb-7 mb-5 border-b border-[#3A3D47]">
              Manage your priorities and daily tasks.
            </p>

            <div>
              <h2 className="pb-4 my-3">Pending</h2>
              <div className="task flex items-center">
                <Square />
                <p className="ml-2">Prepare for React component architecture workshop</p>
              </div>
            </div>

            <div>
              <h2 className="py-4 my-3">Completed</h2>
              <div className="task flex items-center text-white bg-[#040404] p-2 rounded-[5px]">
                <SquareCheck style={{ color: '#676BEB' }} />
                <p className="ml-2">Prepare for React component architecture workshop</p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 space-y-10">
            {/* Notes */}
            <div className="p-4 rounded-[10px] bg-[#141414] border border-[#3A3D47]">
              <h2 className="text-2xl">Recent Notes</h2>
              <p className="text-[#8F8F8F] mb-5 pb-7 border-b border-[#3A3D47]">
                Quick access to your latest thoughts.
              </p>

              <div className="note py-3 px-5 rounded-2xl bg-[#040404]">
                <h2 className="text-2xl py-3">Meeting Notes: Q2 Review</h2>
                <p>
                  Key takeaways from Q2 performance review: focus on user engagement, streamline onboarding, and expand community features.
                  Next steps include A/B testing new signup flows.
                </p>
              </div>
            </div>

            {/* Quick Access */}
            <div className="p-4 rounded-[10px] bg-[#141414] border border-[#3A3D47]">
              <h2 className="text-2xl">Quick Access</h2>
              <p className="text-[#8F8F8F] mb-5 pb-7 border-b border-[#3A3D47]">
                Navigate or find what you need.
              </p>

              <div className="flex-col space-y-5">
                <div className="flex gap-3 items-center">
                  <BookText /> <h2>All Notes</h2>
                </div>
                <div className="flex gap-3 items-center">
                  <ListTodo /> <h2>Tasks</h2>
                </div>
                <div className="flex gap-3 items-center">
                  <LayoutDashboard /> <h2>Project Boards</h2>
                </div>
                <div className="flex gap-3 items-center border-b border-[#3A3D47] pb-7">
                  <Calendar /> <h2>Calendar</h2>
                </div>

                <h2 className="text-2xl pb-3">Offline Support</h2>
                <div className="flex gap-3 items-center">
                  <WifiOff style={{ color: '#676BEB' }} />
                  <p>Active Tasks and notes are accessible offline.</p>
                </div>

                <button className="w-full h-[40px] bg-black rounded-[10px] text-[15px] mt-3">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center gap-2 justify-center py-6 text-gray-400 text-sm">
        <Copyright className="w-4 h-4" />
        <p>2025 VoidNote. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Dashboard
