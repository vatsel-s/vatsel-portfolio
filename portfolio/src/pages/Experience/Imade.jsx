import React from 'react'
import urs from '../../images/experiences/urs.jpeg'
import imade from '../../images/experiences/imade.png'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'

function Imade() {
  return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center w-48 h-15"> 
                    <img src={imade} id="narb"/>
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        Project Manager/Engineer
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300"> September 2024 - Present </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <h2 className='text-md text-gray-300 mt-2'>
                    - Led the development of a novel, low-cost device for detecting muscle strain in gymgoers, allowing for real-time feedback on when to stop exercising to avoid muscle injury
                </h2> 
                <h2 className='text-md text-gray-300 mt-2'>
                    - Collaborated with a team of students at the RSO Illinois Medical Advancements in Design and Engineering(iMADE) to design and build the device
                </h2>
                <h2 className='text-md text-gray-300 mt-2'>
                    - Collected and preprocessed data from 500+ EMGs to train an SVM machine learning model to detect the stages of muscle strain, achieving 90% accuracy in detection 
                </h2> 
                <h2 className='text-md text-gray-300 mt-2'>
                    -  Presented our findings at the 2025 Undergraduate Research Symposium to professors and students
                </h2>
            </div>
        </div>
  )
}

export default Imade