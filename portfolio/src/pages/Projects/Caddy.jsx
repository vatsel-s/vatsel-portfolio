import React from 'react'

function Caddy() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center gap-6 border-6 border-primary">
        <h1 className='font-bold text-2xl mt-4'>
            SmartCaddy
        </h1>
        <p className='text-md text-gray-300 mt-2'>
            Built SmartCaddy, a mobile app for golfers to track distances and improve their golf game through AI generated caddy advice for each shot. The caddie advice uses 
            prompt engineering along with Gemini and background information about the golfer and course to make recommendations. The apps backend is built with Python, with an 
            ETL pipeline using Overpass API and golfcourseAPI storing golf course info in a PostgreSQL database. The frontend is build with React Native, Expo, and Tailwind CSS, 
            featuring live location tracking and real-time updates for the users. 
        </p>
        <div className="flex flex-col items-start md:items-left">
              <a className='text-md text-blue-300' href="https://github.com/vatsel-s/ai-caddie" target="_blank" rel="noreferrer">
                  View this project
              </a>
        </div>
    </div>
  )
}

export default Caddy