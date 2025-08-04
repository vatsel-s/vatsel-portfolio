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
    <div className="max-w-4xl mx-auto p-6 m-6 rounded-xl shadow-md flex flex-col items-center gap-6">
        <h2 className='font-bold text-lg mt-4'>
            Frameworks/ Developer Tools: 
        </h2>
        <div className='grid grid-cols-5 gap-6'>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaReact className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    React
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaNodeJs className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Node.js
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaDocker className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Docker
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaFlask className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Flask
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiFastapi className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    FastAPI
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaGithub className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    GitHub
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <FaAws className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    AWS
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <DiVisualstudio className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Visual Studio
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiAnaconda className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Anaconda
                </h3>
            </div>
        </div>
    </div> 
  )
}

export default Frameworks