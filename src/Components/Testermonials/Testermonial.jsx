import React from 'react'
import TestermonialCard from './TestermonialCard'
import qt from '../../../Images/qut.svg'

const Testermonial = () => {
  return (
    <div>
      <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Users Say
            </h2>

            <p className="text-lg md:text-xl text-white/70">
                Don't just take our word for it. Hear from students and creatives who've transformed their productivity with VoidNote.
            </p>

           
                </div>
    <TestermonialCard/>
               
    </div>
  )
}

export default Testermonial
