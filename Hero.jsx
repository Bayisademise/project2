import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
 <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0  space-y-7 text-center bg-gradient-to-b from-cyan-100/700' >  
  <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'> Empower Your Future with the <br />courses design to <span 
   className ='text-blue-600' > <br /> fit your choice. </span><img src={assets.sketch} 
   alt="sketch"  className='md:block hidden absolute -buttom-7 right-0'  /></h1>

   <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'> WE tray to give some online education compromise with world knowledge </p>
   <p className='md:hidden text-gray-500 max-w-sm mx-auto'> by or online education you can achive your vision </p>
   <SearchBar />
 </div>
  )
}

export default Hero