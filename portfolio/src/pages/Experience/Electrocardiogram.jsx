import React from 'react'
import ecg from '../../images/experiences/ecg.jpg'

function Electrocardiogram() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex md:flex-col items-center gap-6">
        <img src={ecg} id="imade" className="w-48 sm:w-64 md:w-96 lg:w-128" alt="iMADE Project Image" />
        <h2 className='text-xl mt-4 font-bold'>
            Electrocardiogram Diabetes Mellitus Detector | August 2023 - May 2024
        </h2>
        <div className="flex flex-col items-start md:items-left">
            <h2 className='text-md mt-2'>
                - Built an electrocardiogram device that detects diabetes mellitus with the help of Dr. Archie Tram of Ohio State University 
            </h2> 
            <h2 className='text-md mt-2'>
                - Prototyped low-cost electrocardiogram device using Arduino, AD8238 sensor, and electrodes
            </h2>
            <h2 className='text-md mt-2'>
                - Developed preprocessing pipeline to filter and segment electrocardiogram datasets with Python libraries BioSPPy, matplotlib, numpy, and scipy for accurate feature extraction
            </h2> 
            <h2 className='text-md mt-2'>
                - Optimized LSTM(Long short-term memory) neural networks designed in Tensorflow with Keras Tuner for an evaluated 98% prediction accuracy
            </h2>
            <h2 className='text-md mt-2'>
                - Conducted 10+ participant study to evaluate device performance and model accuracy
            </h2>
            <h2 className='text-md mt-2'>
                - Wrote 12 page APA paper detailing findings for the UCIxGATI High School Research Paper Writing Program
            </h2>
        </div>
    </div>
  )
}

export default Electrocardiogram