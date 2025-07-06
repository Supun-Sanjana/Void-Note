import React from 'react'
import qt from "../../../Images/qut.svg"
import woman from "../../../Images/woman.svg"
import man from "../../../Images/men.svg"

const TestermonialCard = () => {

    const card = [
        {
          id:'1',
          icon:qt,
          description:"VoidNote has revolutionized how I manage my studies. The distraction-free design is a game-changer for deep work sessions",
          image:woman,
          user:"A student testing VoidNote",
          role:"University Student"
        },
        {
          id:'2',
          icon:qt,
          description:"As a graphic designer, I appreciate clean interfaces. VoidNote's minimalism helps me focus on creative tasks without visual clutter",
          image:man,
          user:"David Lee",
          role:"Graphic Designer"
        },
    ]

  return (
    <div>
   
    </div>
  )
}

export default TestermonialCard 
