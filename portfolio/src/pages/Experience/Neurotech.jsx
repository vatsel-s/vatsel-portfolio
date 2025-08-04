import React from 'react'
import neurotech from '../../images/experiences/neurotech.png'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'


function Neurotech() {
    return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center w-15 h-15 "> 
                    <img src={neurotech} id="narb" className = "rounded-xl"alt="narb logo" />
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        Model Development Intern
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300">September 2024 - January 2025</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <h3 className='text-md text-gray-300 mt-2'>
                    - Engineer on the Universum project, aiming to design a real-time EEG-controlled lumbar tilt detection device
                </h3> 
                <h3 className='text-md text-gray-300 mt-2'>
                    - Built comprehensive GUI interface for EEG data collection with timers, login, and data visualization using Python and tkinter
                </h3> 
                <h3 className='text-md text-gray-300 mt-2'>
                    - Increased accuracy of participant EEG data and reduced data collection time by 50%
                </h3> 
            </div>
        </div>
    )
}

export default Neurotech