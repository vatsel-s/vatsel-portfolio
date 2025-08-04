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
        <div className='grid grid-cols-4 gap-6'>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiPandas className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Pandas
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiNumpy className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    NumPy
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiScikitlearn className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    scikit-learn
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiTensorflow className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    TensorFlow
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiKeras className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Keras
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiOpenai className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    OpenAI
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiLangchain className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Langchain
                </h3>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl bg-gray-800 h-[150px] w-[150px]'>
                <SiHuggingface className='w-20 h-20' />
                <h3 className='font-bold text-md mt-2'>
                    Hugging Face
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Libraries