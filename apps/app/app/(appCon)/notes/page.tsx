"use client"

import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { Plus, History } from 'lucide-react'
import React, { useState } from 'react'

const Note = () => {

  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const [isOpen, setIsOpen] = useState(false);

  interface TokenPayload {
    id: number; // or number based on your token structure
    username: string;

  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log("No token provided !");
        return;

      }

      const decoded: TokenPayload = jwtDecode(token);
      const userId = decoded.id

      console.log(userId);

      const res = await axios.post('http://localhost:3001/api/v1/note/create-note', {
        title: title,
        content: note,
        userId: userId

      })

      if (res.status === 201) {
        alert("Note saved")

      }


      // Reset form fields
      setTitle('');
      setNote('');
      setIsOpen(false); // Close the modal after submission
    } catch (error) {
      console.log(error);

    }

  };

  return (
    <>
      <div className='flex h-screen'>
        {/* Fixed Sidebar Menu */}
        <div className='fixed left-0 top-20 h-full w-[300px] z-10'>
          <div className="rounded-[5px] p-2 mr-10 menu w-[280px] h-full bg-[#141414] flex flex-col">
            <div className='border-b pb-4 border-[#3A3D47] mb-5'>
              <div className='flex gap-3 p-3 bg-black rounded-[10px] mt-5 cursor-pointer hover:bg-gray-900 transition-colors'
                onClick={() => setIsOpen(true)}
              >
                <Plus style={{ width: '20px' }} />
                <h2>Add New Notes</h2>
              </div>
            </div>

            {/* Sticky header */}
            <div className='flex gap-3 mb-4 border-b pb-4 border-[#3A3D47] sticky top-0 bg-[#141414] z-10'>
              <History style={{ width: '20px' }} />
              <h2>Recent Notes</h2>
            </div>

            {/* Scrollable content - flex-1 takes remaining space */}
            <div className='flex-1 overflow-y-auto scrollbar-hide'>
              <div className='space-y-3 pb-8'>
                {[...Array(60)].map((_, index) => (
                  <div key={index} className='p-2 hover:bg-gray-800 rounded cursor-pointer'>
                    <h2 className='text-sm text-gray-300'>Test Note {index + 1}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className='flex-1 ml-[300px] p-6 bg-black min-h-screen'>
          {isOpen && (
            <div className="main max-w-4xl mx-auto">
              <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-lg">
                <div className="title mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-white">Add New Note</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder='Enter note title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="details mb-6">
                  <textarea
                    placeholder="Write your note here..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={12}
                    className="w-full p-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => handleSubmit(e as any)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            </div>
          )}

          {!isOpen && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-400">
                <h2 className="text-xl mb-2">Welcome to VoidNote</h2>
                <p>Click "Add New Notes" to create your first note</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Note