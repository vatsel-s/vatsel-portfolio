import React from 'react'
import urs from '../../images/experiences/urs.jpeg'

function Lifetime() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex md:flex-col items-center gap-6">
        <img src={urs} id="imade" className="w-48 sm:w-64 md:w-96 lg:w-128" alt="iMADE Project Image" />
        <h2 className='text-xl mt-4 font-bold'>
            Tennis Instructor at Lifetime Tennis | December 2022 - August 2024
        </h2>
        <div className="flex flex-col items-start md:items-left">
            <h2 className='text-md mt-2'>
                - Led the development of a novel, low-cost device for detecting muscle strain in gymgoers, allowing for real-time feedback on when to stop exercising to avoid muscle injury.
            </h2> 
            <h2 className='text-md mt-2'>
                - This project was with the iMADE RSO at the University of Illinois at Urbana-Champaign, where I collaborated with a team of students to design and prototype the device.
            </h2>
            <h2 className='text-md mt-2'>
                - We preprocessed data from 500+ EMGs to train an SVM machine learning model to detect the stages of muscle strain, achieving 90% accuracy in detection. 
            </h2> 
            <h2 className='text-md mt-2'>
                - We presented our findings at the 2025 Undergraduate Research Symposium to professors and students. 
            </h2>
        </div>
    </div>
  )
}

export default Lifetime