import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="relative z-10 flex items-center justify-center min-h-screen 
       text-white ">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Focus. Simplify. Achieve.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Your minimalist companion for distraction-free productivity
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 bg-purple-600/80 backdrop-blur-sm rounded-lg hover:bg-purple-600 transition-all duration-300">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
