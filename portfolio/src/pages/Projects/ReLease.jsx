import React from 'react'

function ReLease() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center gap-6 border-6 border-primary">
        <h1 className='font-bold text-2xl mt-4'>
            ReLease
        </h1>
        <p className='text-md text-gray-300 mt-2'>
            Built ReLease, an interactive web application that allows landlords and tenants to easily manage leases and rental agreements. The app features AI summaries for long, convoluted 
            lease documents, making it easier for users to understand their rights and responsibilities. It also includes an AI agent, powered by Letta and Gemini, that allows tenants and 
            landlords to change their lease terms through natural language conversations, with real time updates for both parties. 
        </p>
        <div className="flex flex-col items-start md:items-left">
              <a className='text-md text-blue-300' href="https://ai-hackathon-2025-pi.vercel.app/" target="_blank" rel="noreferrer">
                  View this project
              </a>
        </div>
    </div>
  )
}

export default ReLease