import React from 'react'
import qt from "../../../Images/qut.svg"
import woman from "../../../Images/woman.svg"
import man from "../../../Images/men.svg"

const TestimonialCard = ({ icon, description, image, user, role }) => {
  return (
    <div className='flex flex-col space-y-4 backdrop-blur-md border border-white/10 
      rounded-xl p-6 hover:bg-[#010018] hover:border-white/20 transition-all duration-300 
      hover:transform hover:scale-102 group bg-[#0C0C2F] mx-3 mb-3 py-9 px-8'>
      
      <img src={icon} alt="icon" className='w-6 h-11' />
      
      <h3 className='text-white text-xl'>{description}</h3>
      
      <div className='flex mt-4 align-center'>
        <img src={image} className="w-12 h-12 rounded-full" alt="" />
        <div className='ml-3'>
          <span className='text-white'>{user}</span><br />
          <span className='text-gray-400 text-md'>{role}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard