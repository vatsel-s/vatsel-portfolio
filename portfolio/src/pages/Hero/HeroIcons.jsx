import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HeroIcons() {
  return (
    <div className = "flex flex-row gap-4 mt-4">
        <a href="https://github.com/vatsel-s" target="_blank" rel="noopener noreferrer">
            <FaGithub className='w-8 h-8 text-blue-300'/>
        </a>
        <a href="https://www.linkedin.com/in/vatsel-srivastava/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='w-8 h-8 text-blue-300' />
        </a>
        <a href="https://www.instagram.com/vatsel3/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='w-8 h-8 text-blue-300' />
        </a>
        <a href="mailto:vatsels2@illinois.edu" target="_blank" rel="noopener noreferrer">
            <MdEmail className='w-8 h-8 text-blue-300' />
        </a>
    </div> 
  )
}

export default HeroIcons