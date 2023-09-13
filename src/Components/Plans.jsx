import React from 'react'

function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='md:grid grid-cols-3 mx-auto'> 
            <div className='shadow-xl  mx-8 my-3 h-[500px] hover:scale-105 duration-500  grid-cols-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus aspernatur rem minima id tenetur odio aut expedita reiciendis enim inventore, eligendi ratione exercitationem assumenda eius ab molestias placeat molestiae ad. <br />
            <button className='bg-[#00df9a]  text-black px-6 py-3 rounded my-4 w-[40%]'>Start Trial</button>
            </div>
            <div className='shadow-xl mx-8 my-3 h-[500px] bg-gray-100 hover:scale-105 duration-500  grid-cols-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corporis ratione eius blanditiis molestias a doloremque nobis necessitatibus tempore. Atque inventore ad culpa praesentium non enim ratione magnam repellendus debitis. <br />
            <button className='text-[#00df9a]  bg-black px-6 py-3 rounded my-4 w-[40%]'>Start Trial</button></div>
            <div className='shadow-xl mx-8 my-3 h-[500px] hover:scale-105 duration-500  grid-cols-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis ut porro quae. Sunt at consectetur laboriosam tempore ratione aspernatur quia eum magnam iure. Fugiat cumque hic eveniet quo et?
            <br />
            <button className='bg-[#00df9a]  text-black px-6 py-3 rounded my-4 w-[40%]'>Start Trial</button></div>
        </div>
    </div>
  )
}

export default Plans
