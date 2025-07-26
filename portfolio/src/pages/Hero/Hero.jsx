import React from 'react'
import profile_pic from '../../images/profile/profile.jpg'

function Hero() {
  return (
    <div className = "max-w-4xl mx-auto p-6 m-6 bg-gray-110 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
        <img src={profile_pic} id="profile" className="w-24 sm:w-32 rounded-xl md:w-48 lg:w-64 rounded_full" alt="Profile Picture" />
        <div className="flex flex-col justify-center items-center md:items-center">
            <h1 className = 'font-bold text-5xl mt-4'>
                Vatsel Srivastava
            </h1>
            <h2 className = 'text-xl mt-2'>
                Computer Science and Bioengineering Student at UIUC
            </h2>
            <h2 className = 'text-md mt-2'>
                Hi! I'm Vatsel, an incoming sophomore at the University of Illinois at Urbana Champaign. 
                I'm passionate about engineering at the intersection of biology and computation, particularly in the fields of computational 
                drug discovery and synthetic biology. I enjoy working on real-world challenges that can make positive impacts to the world around me. 
                Outside of academics, I love playing tennis, cricket, and golf, as well as biking, going to concerts, and playing chess.
            </h2>
        </div>
    </div>
  )
}

export default Hero