import React from 'react'
import ecg from '../../images/experiences/ecg.jpg'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'

function Electrocardiogram() {
  return (
    <div className = "max-w-2xl mx-auto p-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col gap-6 items-center border-6 border-primary">
        <div className="flex flex-row items-center gap-4 mb-6">
            <div className = "flex items-center w-48 h-24"> 
                <img src={ecg} id="narb"/>
            </div>
            <div className = "flex flex-col items-start md:items-center">
                <h3 className='text-xl text-primary font-bold'>
                    Electrocardiogram Diabetes Mellitus Detector
                </h3>
                <div className = "flex item-center gap-2"> 
                    <CalendarDaysIcon className="w-6 h-6" />
                    <span className="text-gray-300">August 2023 - May 2024</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-start md:items-left">
            <h2 className='text-md text-gray-300 mt-2'>
                - Built an electrocardiogram device that detects diabetes mellitus with the help of Dr. Archie Tram of Ohio State University 
            </h2> 
            <h2 className='text-md text-gray-300 mt-2'>
                - Prototyped low-cost electrocardiogram device using Arduino, AD8238 sensor, and electrodes
            </h2>
            <h2 className='text-md text-gray-300 mt-2'>
                - Developed preprocessing pipeline to filter and segment electrocardiogram datasets with Python libraries BioSPPy, matplotlib, numpy, and scipy for accurate feature extraction
            </h2> 
            <h2 className='text-md text-gray-300 mt-2'>
                - Optimized LSTM(Long short-term memory) neural networks designed in Tensorflow with Keras Tuner for an evaluated 98% prediction accuracy
            </h2>
            <h2 className='text-md text-gray-300 mt-2'>
                - Conducted 10+ participant study to evaluate device performance and model accuracy
            </h2>
            <h2 className='text-md text-gray-300 mt-2'>
                - Wrote 12 page APA paper detailing findings for the UCIxGATI High School Research Paper Writing Program
            </h2>
        </div>
    </div>
  )
}

export default Electrocardiogram
