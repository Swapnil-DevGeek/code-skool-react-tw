import React from 'react'

function Newsletter() {
  return (
    <div className='w-full bg-[#2699fb] p-4 '>
        <div className="max-w-[1240px] md:flex mx-auto justify-between py-8 items-center">
            <div>
                <h1 className=' text-[20px] md:text-[40px] text-white font-bold'>Want to learn latest I.T skills?</h1>
                <span className='text-white my-2'>
                    Sign up to our newsletter and stay up to date.
                </span>
            </div>
            <div>
                <input type="text" className='sm:min-w-full p-2 rounded text-slate-500 my-4' placeholder='email' />
                <button className='bg-black text-white p-2  rounded'>Get Started</button>
                <br />
                <p className='text-white '>We care about the protection of your data.Read our <br /> Privacy Policy.</p>
            </div>
        </div>
    </div>  
  )
}

export default Newsletter
