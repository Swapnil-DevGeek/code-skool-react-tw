import React from 'react'
import laptop from "../Assets/laptop.avif"

function Experts() {
  return (
    
      <div className="max-w-[1240px] mx-auto my-10 md:grid grid-cols-2 p-2">
        <div className='col-span-1 md:w-[75%] text-center'>
            <img src= {laptop} alt="" className='rounded-md'/>    
        </div> 
        <div className='col-span-1 flex flex-col  justify-center gap-5'>
            <h1 className='text-[#00df9a] font-bold uppercase text-3xl m-2'>Learn From Experts</h1>            
            <p className='m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi minus fugiat neque similique, officiis numquam quos magnam deserunt cum amet doloribus quas iste, id corporis dolorem quasi. Voluptate, velit voluptates!</p>
            <button className='bg-black text-white px-6 py-3 rounded m-2 w-[40%]'>Get Started</button>
         </div>
      </div>
   
  )
}

export default Experts
