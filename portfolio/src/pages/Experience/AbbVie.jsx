import React from 'react'
import abbvie from '../../images/experiences/abbvie.jpeg'
import {CalendarDaysIcon} from '@heroicons/react/24/outline'


function AbbVie() {
    return (
        <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center border-6 border-primary">
            <div className="flex flex-row items-center gap-4 mb-6">
                <div className = "flex items-center w-15 h-15 "> 
                    <img src={abbvie} id="abbvie" className = "rounded-xl"alt="abbvie logo" />
                </div>
                <div>
                    <h3 className='text-xl text-primary font-bold'>
                        Software Engineering Intern
                    </h3>
                    <div className = "flex item-center gap-2"> 
                        <CalendarDaysIcon className="w-6 h-6" />
                        <span className="text-gray-300">November 2025 - Present</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-left">
                <p className='text-md text-gray-300 mt-2 text-left'>
                    As a Software Engineering Intern on the R&D team, I architected a spec-driven-development framework as an AI developer tool, validating it through hello-world scaffolding and reverse-engineering of brownfield applications, which improved software development efficiency for 5+ applications. I also built a medical information document translation service that has translated 100+ documents and saved 50+ R&D hours, engineering its Flask REST endpoints to integrate with Veeva APIs, deploying it on AWS through Terraform, and testing it comprehensively with the UAT team in Datadog and AWS CloudWatch.
                </p>
            </div>
        </div>
    )
}

export default AbbVie