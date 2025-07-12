import React from 'react'
import qt from "../../../Images/qut.svg"
import woman from "../../../Images/woman.svg"
import man from "../../../Images/men.svg"
import TestermonialCard from './TestermonialCard'

const Testermonial = () => {

  const testimonials = [
    {
      id: '1',
      icon: qt,
      description: "VoidNote has revolutionized how I manage my studies. The distraction-free design is a game-changer for deep work sessions",
      image: woman,
      user: "A student testing VoidNote",
      role: "University Student"
    },
    {
      id: '2',
      icon: qt,
      description: "As a graphic designer, I appreciate clean interfaces. VoidNote's minimalism helps me focus on creative tasks without visual clutter",
      image: man,
      user: "David Lee",
      role: "Graphic Designer"
    },
  ]

  return (
    <div className='relative z-10 px-4 sm:px-6 lg:px-8 py-20'>


      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 justify-center flex">
        What Our Users Say
      </h2>

      <p className="text-lg md:text-xl text-white/70 mb-11 text-center mx-8">
        Don't just take our word for it. Hear from students and creatives who've transformed
        their productivity with VoidNote.
      </p>


      <div className='flex flex-col md:flex-row justify-center gap-2 max-w-7xl mx-auto'>


        {testimonials.map((test, index) => (

          <TestermonialCard
            key={index}
            icon={test.icon}
            description={test.description}
            image={test.image}
            user={test.user}
            role={test.role}
          />


        ))}
      </div>
    </div>
  )
}

export default Testermonial
