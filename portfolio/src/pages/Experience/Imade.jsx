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
                        <span className="text-gray-300"> September 2024 - Present</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <p className='text-md text-gray-300 mt-2 text-left'>
                    As Project Manager and Engineer at Illinois Medical Advancements in Design and Engineering (iMADE), I lead a cross-functional team of 8 engineers developing SafeFit, a novel low-cost wearable device that detects muscle strain in gymgoers to prevent injury. I designed and built the EMG device with a real-time collection pipeline in Python and Arduino, engineered an EMG dinosaur game that turned live muscle signals into in-game jumps for 300+ attendees at EOH, and trained an SVM model on data from 500+ EMGs to detect stages of muscle strain with 90% accuracy, which we presented at the 2025 Undergraduate Research Symposium.
                </p>
            </div>
        </div>
  )
}

export default Imade