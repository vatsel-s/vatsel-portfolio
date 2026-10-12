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
            <p className='text-md text-gray-300 mt-2 text-left'>
                I built an electrocardiogram device that detects diabetes mellitus, with guidance from Dr. Archie Tram of Ohio State University, prototyping a low-cost version with an Arduino, an AD8238 sensor, and electrodes. I developed a preprocessing pipeline with BioSPPy, matplotlib, numpy, and scipy to filter and segment the ECG datasets for accurate feature extraction, then optimized LSTM neural networks in TensorFlow with Keras Tuner to reach an evaluated 98% prediction accuracy. I evaluated the device and model in a study with 10+ participants and wrote a 12 page APA paper on the findings for the UCIxGATI High School Research Paper Writing Program.
            </p>
        </div>
    </div>
  )
}

export default Electrocardiogram
