import React from 'react'
import lifetime from '../../images/experiences/lifetime.svg'

function Lifetime() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex md:flex-col items-center gap-6">
        <img src={lifetime} id="imade" className="w-48 sm:w-64 md:w-96 lg:w-128" alt="iMADE Project Image" />
        <h2 className='text-xl text-primarymt-4 font-bold'>
            Tennis Instructor at Lifetime Tennis | December 2022 - August 2024
        </h2>
        <div className="flex flex-col items-start md:items-left">
            <h2 className='text-md text-gray-300 mt-2'>
                - Led tennis classes for 200+ students of ages 5-60, helping them improve their tennis skills and enhance their tennis playing experience. 
            </h2> 
            <h2 className='text-md text-gray-300 mt-2'>
                - Collaborated with other instructors to design lesson plans with interactive drills and games to cater to each students unique learning style and goals. 
            </h2>
            <h2 className='text-md text-gray-300 mt-2'>
                - Led solo lessons and private lessons and facilitated parent-teacher relationships. 
            </h2> 
        </div>
    </div>
  )
}

export default Lifetime