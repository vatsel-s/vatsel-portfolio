import React from 'react'
import ExperiencesHeader from './ExperienceHeader'
import Narb from './Narb'
import Imade from './Imade'
import Electrocardiogram from './Electrocardiogram'
import Lifetime from './Lifetime'
import Neurotech from './Neurotech'
import AbbVie from './AbbVie'

function Experience() {
  return (
    <div>
        <ExperiencesHeader/>
        <AbbVie />
        <Narb />
        <Imade />
        <Neurotech />
        <Electrocardiogram />
        <Lifetime />
    </div>
  )
}

export default Experience