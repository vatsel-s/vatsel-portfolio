import React from 'react'
import ExperiencesHeader from './ExperienceHeader'
import Narb from './Narb'
import Imade from './Imade'
import Electrocardiogram from './Electrocardiogram'
import Lifetime from './Lifetime'
import Neurotech from './Neurotech'
import AbbVie from './AbbVie'
import Climer from './Climer'

function Experience() {
  return (
    <div>
        <ExperiencesHeader/>
        <AbbVie />
        <Climer />
        <Narb />
        <Imade />
        <Neurotech />
        <Electrocardiogram />
        <Lifetime />
    </div>
  )
}

export default Experience