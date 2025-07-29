import React from 'react'
import Languages from './Languages';
import Frameworks from './Frameworks';
import Libraries from './Libraries';
import Skillsheader from './Skillsheader';

function Skills() {
  return (
    <div> 
        <Skillsheader />
        <Languages />
        <Frameworks />
        <Libraries />
    </div>
  )
}

export default Skills