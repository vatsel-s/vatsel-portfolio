import React from 'react'
import {CalendarDaysIcon, BeakerIcon} from '@heroicons/react/24/outline'


function Climer() {
    return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center justify-center w-15 h-15 rounded-xl bg-gray-700 p-3">
                    <BeakerIcon className="w-9 h-9 text-primary" />
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        Research Assistant
                    </h3>
                    <h3 className='text-md text-gray-300'>
                        Climer Lab, University of Illinois at Urbana-Champaign
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300">August 2025 - Present</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <p className='text-md text-gray-300 mt-2 text-left'>
                    As a Research Assistant in the Climer Lab, I developed a Markovian synthetic calcium imaging data pipeline to simulate representational drift in mouse neurons, and built driftbench, a Python library with 20+ computational methods for quantifying that drift. Alongside the software work, I regularly read, present, and analyze scientific literature to ground our methods in current neuroscience research and share findings with the lab.
                </p>
            </div>
        </div>
    )
}

export default Climer
