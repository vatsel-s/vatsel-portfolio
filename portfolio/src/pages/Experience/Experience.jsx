import React from 'react'
import ExperiencesHeader from './ExperienceHeader'
import Narb from './Narb'
import Imade from './Imade'
import Electrocardiogram from './Electrocardiogram'
import Lifetime from './Lifetime'
import Neurotech from './Neurotech'

function Experience() {
  return (
    <div>
        <ExperiencesHeader/>
        <Narb />
        <Imade />
        <Neurotech />
        <Electrocardiogram />
        <Lifetime />
    </div>
  )
}

export default Experience