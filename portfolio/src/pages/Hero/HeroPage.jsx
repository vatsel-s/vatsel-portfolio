import React from 'react'
import Hero from './Hero'
import HeroIcons from './HeroIcons'

function HeroPage() {
  return (
    <div className = "max-w-4xl bg-gray-800 mx-auto p-6 m-6 rounded-xl shadow-md flex flex-col md:flex-col items-center gap-6 border-6 border-primary p-4">
        <Hero />
    </div>
  )
}

export default HeroPage