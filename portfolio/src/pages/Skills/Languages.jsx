import React from 'react'

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import matlab from '../../images/skills/matlab.png'


function Languages() {
  return (
    <div className="max-w-4xl mx-auto p-6 m-6 rounded-xl shadow-md flex flex-col items-center gap-6">
        <h2 className='font-bold text-lg mt-4'>
            Languages: 
        </h2>
        <div className='grid grid-cols-5 gap-6'>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaJava className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Java
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaPython className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Python
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <DiPostgresql className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    PostgreSQL
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <IoLogoJavascript className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    JavaScript
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiTypescript className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    TypeScript
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiCplusplus className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    C++
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaHtml5 className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    HTML5
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaCss3Alt className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    CSS3
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiArduino className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Arduino
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <img className = "w-20 h-20 invert" src = {matlab} alt = "Matlab" />
                <h3 className='font-bold text-md mt-2'>
                    Matlab
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Languages