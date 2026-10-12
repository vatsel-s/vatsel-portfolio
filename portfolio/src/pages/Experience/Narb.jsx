import React from 'react'
import narb from '../../images/experiences/narb.jpeg'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'


function Narb() {
    return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center w-48 h-15 "> 
                    <img src={narb} id="narb" className = "rounded-xl"alt="narb logo" />
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        Software Engineering Intern
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300">June 2025 - August 2025</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <p className='text-md text-gray-300 mt-2 text-left'>
                    As a Software Engineering Intern, I developed 10+ agents in an agentic workflow with LangGraph and Gemini for natural language code generation, integrating RAG with ChromaDB vector search for agent context to improve code accuracy by about 40%, and implemented 50+ unit tests with Pydantic to ensure the quality of the generated code. I also built a full-stack web and mobile MVP for PantryPal, a recipe app that lets users generate and schedule recipes based on the ingredients they already have, using React Native, Expo, Convex databases, Next.js, and Clerk JWT authentication.
                </p>
            </div>
        </div>
    )
}

export default Narb