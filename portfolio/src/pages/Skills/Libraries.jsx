import React from 'react'

import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";



function Libraries() {
  return (
    <div className="max-w-4xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex flex-col items-center gap-6">
        <h2 className='font-bold text-lg mt-4'>
            Libraries: 
        </h2>
        <div className='flex flex-row gap-4'>
            <SiPandas className='w-16 h-16' />
            <SiNumpy className='w-16 h-16' />
            <SiScikitlearn className='w-16 h-16' />
            <SiTensorflow className='w-16 h-16' />
            <SiKeras className='w-16 h-16' />
            <SiPytorch className='w-16 h-16' />
            <SiOpenai className='w-16 h-16' />
            <SiLangchain className='w-16 h-16' />
            <SiHuggingface className='w-16 h-16' />
        </div>
    </div>
  )
}

export default Libraries