// TestimonialCard.jsx
import React from 'react'

const TestimonialCard = ({ icon, description, image, user, role }) => {
  return (
    <div className='
      relative bg-[#0C0C2F] backdrop-blur-md border border-white/10 
      rounded-xl p-6 sm:p-8 transition-all duration-300 
      hover:bg-[#010018] hover:border-white/20 hover:scale-[1.02]
      w-full max-w-md mx-auto
      sm:w-80 lg:w-96 lg:max-w-lg
      flex flex-col h-full
    '>
      {/* Quote Icon */}
      <div className="mb-4 flex-shrink-0">
        <img src={icon} alt="quote icon" className='w-6 h-8 sm:w-8 sm:h-10' />
      </div>

      {/* Testimonial Text */}
      <div className="flex-grow mb-6">
        <p className='text-white text-base sm:text-lg lg:text-xl leading-relaxed'>
          "{description}"
        </p>
      </div>

      {/* User Info */}
      <div className='flex items-center mt-auto'>
        <img
          src={image}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          alt={`${user} profile`}
        />
        <div className='ml-3 min-w-0'>
          <div className='text-white text-sm sm:text-base font-medium truncate'>
            {user}
          </div>
          <div className='text-gray-400 text-xs sm:text-sm'>
            {role}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard