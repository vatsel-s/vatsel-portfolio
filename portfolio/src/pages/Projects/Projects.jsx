import React from 'react'
import ProjectsHeader from './ProjectHeader';
import ReLease from './ReLease';
import Caddy from './Caddy';
import Kalshi from './Kalshi';
import RagBenchmark from './RagBenchmark';

function Projects() {
  return (
    <div>
        <ProjectsHeader /> 
        <Kalshi />
        <RagBenchmark />
        <ReLease />
        <Caddy />
    </div>
  )
}

export default Projects