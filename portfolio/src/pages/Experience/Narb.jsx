import React from 'react'
import narb from '../../images/experiences/narb.jpeg'

function Narb() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex md:flex-col items-center gap-6">
        <img src={narb} id="imade" className="w-48 sm:w-64 md:w-96 lg:w-128" alt="iMADE Project Image" />
        <h2 className='text-xl mt-4 font-bold'>
            Software Engineering Intern at Narb | June 2024 - Present
        </h2>
        <div className="flex flex-col items-start md:items-left">
            <h2 className='text-md mt-2'>
                - Built web/mobile app MVP for potential pantry management app to track current pantry items, expiration dates, and scheduling possible recipes
            </h2> 
            <h2 className='text-md mt-2'>
                - Designed pantry with React Native and Expo for mobile development, React for web development, and Convex for backend development and real-time database features with Clerk JWT authentication
            </h2>
            <h2 className='text-md mt-2'>
                - Developing AI agent with langgraph and Gemini for customized HITL app building as part of the nApp Project
            </h2> 
            <h2 className='text-md mt-2'>
                - Building interactive frontend for nAgent project with React and Tailwind CSS, allowing users to interact with personalized calling assistant seamlessly 
            </h2>
        </div>
    </div>
  )
}

export default Narb