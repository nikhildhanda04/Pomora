import React from 'react'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div className='bg-[#2F2F2F] h-screen flex flex-col items-center'>
        <div className='font-[AbrilFatface] text-white text-center text-[4vw] pt-[10vh]'>
            POMORA
        </div>
        <div className='font-[inter] text-white font-semibold text-center text-[1.3vw]'>
            stay focused, stay productive
        </div>
        <div className=' my-[3vh]'>
            <Navbar />
        </div>
    </div>
  )
}

export default LandingPage
