import React from 'react'
import abbvie from '../../images/experiences/abbvie.jpeg'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'


function AbbVie() {
    return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center w-15 h-15 "> 
                    <img src={abbvie} id="abbvie" className = "rounded-xl"alt="abbvie logo" />
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        Software Engineering Intern
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300">November 2025 - Present</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <h3 className='text-md text-gray-300 mt-2'>
                    - Working with the R&D team to develop software solutions for pharmaceutical research and development
                </h3> 
                <h3 className='text-md text-gray-300 mt-2'>
                    - Conducted comprehensive system design review for efficient team transition  
                </h3> 
                <h3 className='text-md text-gray-300 mt-2'>
                    - Utlizing AWS Bedrock and Large Language Models for internal tool development
                </h3> 
            </div>
        </div>
    )
}

export default AbbVie