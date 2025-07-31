import React from 'react'
import narb from '../../images/experiences/narb.jpeg'
import {useState} from 'react'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'

function Narb() {
    const [expanded, setExpanded] = useState(false); 
    return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center w-48"> 
                    <img src={narb} id="narb" className = "rounded-xl"alt="narb logo" />
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        Software Engineering Intern
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300">June 2025 - Present</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <h2 className='text-md text-gray-300 mt-2'>
                    - Built web/mobile app MVP for potential pantry management app to track current pantry items, expiration dates, and scheduling possible recipes
                </h2> 
                <h2 className='text-md text-gray-300 mt-2'>
                    - Designed pantry with React Native and Expo for mobile development, React for web development, and Convex for backend development and real-time database features with Clerk JWT authentication
                </h2>
                <h2 className='text-md text-gray-300 mt-2'>
                    - Developing AI agent with langgraph and Gemini for customized HITL app building as part of the nApp Project
                </h2> 
                <h2 className='text-md text-gray-300 mt-2'>
                    - Building interactive frontend for nAgent project with React and Tailwind CSS, allowing users to interact with personalized calling assistant seamlessly 
                </h2>
            </div>
        </div>
    )
}

export default Narb