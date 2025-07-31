import React from 'react'

import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { SiAnaconda } from "react-icons/si";


function Frameworks() {
  return (
    <div className="max-w-4xl mx-auto p-6 m-6 bg-primary rounded-xl shadow-md flex flex-col items-center gap-6">
        <h2 className='font-bold text-lg mt-4'>
            Frameworks/ Developer Tools: 
        </h2>
        <div className='flex flex-row gap-4'>
            <FaReact className='w-16 h-16' />
            <FaNodeJs className='w-16 h-16' />
            <FaDocker className='w-16 h-16' />
            <FaFlask className='w-16 h-16' />
            <SiFastapi className='w-16 h-16' />
            <FaGithub className='w-16 h-16' />
            <FaAws className='w-16 h-16' />
            <DiVisualstudio className='w-16 h-16' />
            <SiAnaconda className='w-16 h-16' />
        </div>
    </div> 
  )
}

export default Frameworks