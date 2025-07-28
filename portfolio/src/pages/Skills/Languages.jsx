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


function Languages() {
  return (
    <div className="max-w-4xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex flex-col items-center gap-6">
        <h2 className='font-bold text-lg mt-4'>
            Languages: 
        </h2>
        <div className='flex flex-row gap-4'>
            <FaJava className='w-16 h-16' />
            <FaPython className='w-16 h-16' />
            <DiPostgresql className='w-16 h-16' />
            <IoLogoJavascript className='w-16 h-16' />
            <SiTypescript className='w-16 h-16' />
            <SiCplusplus className='w-16 h-16' />
            <FaHtml5 className='w-16 h-16' />
            <FaCss3Alt className='w-16 h-16' />
            <SiArduino className='w-16 h-16' />
        </div>
    </div>
  )
}

export default Languages