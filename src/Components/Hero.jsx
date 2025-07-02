import React from 'react'
import  download from '../../Images/downloadicon.png';
const Hero = () => {
  return (
    <>
     <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Focus. Simplify. Achieve.
        </h1>
        <p className="text-xl md:text-2xl  text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          VoidNote is your minimalist companion for distraction-free to-dos and notes, designed 
          for students and creatives who value clarity and efficiency
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center space-x-2" style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'
          }}>
           <img src={download} alt="" />
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            
            <span>Download for Desktop</span>
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero;
