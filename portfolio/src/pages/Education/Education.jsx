import React from 'react'
import illinois from '../../images/experiences/illinois.svg'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'


function Education() {
    return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center justify-center w-16 h-16 shrink-0 rounded-xl bg-white p-2">
                    <img src={illinois} id="illinois" className = "h-full" alt="University of Illinois logo" />
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        University of Illinois at Urbana-Champaign
                    </h3>
                    <h3 className='text-md text-gray-300'>
                        B.S. in Computer Science and Bioengineering
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300">Expected December 2027</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <p className='text-md text-gray-300 mt-2 text-left'>
                    I am a junior at the University of Illinois at Urbana-Champaign pursuing a B.S. in Computer Science and Bioengineering, with a 3.9/4.0 GPA and an expected graduation in December 2027. I am a James Scholar, a Grainger Engineering Scholar, a three-time Dean's List honoree, and a member of the Tau Beta Pi Honor Society, and my coursework includes Algorithms, Database Systems, Data Structures, Introduction to Computer Systems, Artificial Intelligence, Software Design Lab, Numerical Methods, and Statistics and Probability.
                </p>
            </div>
        </div>
    )
}

export default Education
