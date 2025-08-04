import React from 'react'
import lifetime from '../../images/experiences/lifetime_activities.jpeg'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'

function Lifetime() {
  return (
    <div className="max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
        <div className="flex flex-row items-center gap-4 mb-6">
            <div className="flex items-center w-48 h-24">
                <img src={lifetime} id="imade" alt="Lifetime Project Image" />
            </div>
            <div>
                <h3 className='text-xl text-primary font-bold'>
                    Tennis Instructor
                </h3>
                <div className="flex item-center gap-2">
                    <CalendarDaysIcon className="w-6 h-6" />
                    <span className="text-gray-300">December 2022 - August 2024</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-start md:items-left">
            <h2 className='text-md text-gray-300 mt-2'>
                - Led tennis classes for 200+ students of ages 5-60, helping them improve their tennis skills and enhance their tennis playing experience.
            </h2>
            <h2 className='text-md text-gray-300 mt-2'>
                - Collaborated with other instructors to design lesson plans with interactive drills and games to cater to each student's unique learning style and goals.
            </h2>
            <h2 className='text-md text-gray-300 mt-2'>
                - Led solo lessons and private lessons and facilitated parent-teacher relationships.
            </h2>
        </div>
    </div>
  )
}

export default Lifetime