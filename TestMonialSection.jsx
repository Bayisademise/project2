import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestMonialSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>  Testmonail</h2>
      <p className='md:text-base text-gray-500 mt-3'>hear as you the share thier joirneys of trsanformation,succuss and how our <br /> platform haas made a differnce in thier lives</p>
      <div className='grid grid-cols-auto gap-4 mt-14 cursor-pointer'>
        {dummyTestimonial.map((testmonial,index)=>(
          <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-blak/5 overflow-hidden'> 
          <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
            <img className='h-12 w-12 rounded-full' src={testmonial.image} alt={testmonial.name} />
            <div>
              <h1 className='text-lg font-medium text-gray-800'>{testmonial.image}</h1>
              <p className='text-gray-800/80'>{testmonial.role}</p>
            </div>
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i)=>(
                  <img className='h-5' key={i} src={i < Math.floor(testmonial.rating) ? assets.stand :assets.star_blank} alt="stand"/>
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testmonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestMonialSection