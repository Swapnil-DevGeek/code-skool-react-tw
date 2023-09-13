import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[120px] '>
      <div className='max-w-[1240px] mx-auto text-center my-6'>
        <div className='text-3xl md:text-3xl font-bold mb-3'>
            Learn With Us
        </div>
        <h2 className='text-white md:text-7xl font-bold my-3 pt-8 text-5xl'>
            Grow With Us. 
        </h2>
        <div className='my-3 py-6 font-bold text-4xl md:text-6xl text-white mt-4'>
            Learn <Typed
            strings={['Web Development','Digital Marketing','Ethical Hacking']}
            typeSpeed={100} 
            backSpeed={70}
            loop = {true}/>
        </div>
        <button className='bg-black text-white px-6 py-3 rounded mt-6'>Get Started</button>
      </div>
    </div>
  )
}

export default Banner
