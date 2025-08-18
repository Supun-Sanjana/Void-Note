'use client'

import React, { useState } from 'react';
import * as z from 'zod';

const emailSchema = z.string().email({ message: "Please enter a valid email address" });

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = () => {
  setError('');
  setSuccess(false);

  const validation = emailSchema.safeParse(email);

  if (!validation.success) {
    // Use issues array instead of errors
    setError(validation.error.issues[0].message);
    return;
  }

  // Simulate subscription success
  setSuccess(true);
  setEmail('');
};


  return (
    <div id='newsletter' className='relative flex flex-col items-center my-[30px] mx-auto
      px-4 sm:px-6 lg:px-8 py-20 justify-center max-w-7xl sm:rounded-3xl
      left-0 right-0 bg-gradient-to-r from-[#676BEB] to-[#7E4CDE] overflow-hidden'>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className='text-3xl text-center sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4'>
          Stay Updated with VoidNote
        </h2>
        <p className='text-base text-center sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 mb-8'>
          Subscribe to our newsletter for exclusive tips, product updates, and special offers
        </p>

        {error && <p className="text-red-300 mt-2">{error}</p>}
        {success && <p className="text-green-400 mt-2">Successfully subscribed!</p>}


        <div className='flex flex-col sm:flex-row gap-4 w-full max-w-2xl'>

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white/20 border border-white/20 rounded-lg py-3 px-4 flex-1
              focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent
              text-white placeholder-white/60 backdrop-blur-sm'
          />
          <button
            onClick={handleSubscribe}
            className='bg-white/90 hover:bg-white/30 hover:text-white border hover:border-white transition-colors duration-200
              rounded-lg py-3 px-6 text-[#676BEB] font-semibold whitespace-nowrap
              cursor-pointer'
          >
            Subscribe to latest updates
          </button>
        </div>


      </div>
    </div>
  )
}

export default NewsLetter;
