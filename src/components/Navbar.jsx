import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-[80%] m-auto'>
       <div className="text-2xl text-yellow-300 font-bold ">CineFile</div>
       <ul className='text-black flex items-center gap-3'>
        <li>Home</li>
        <li>Movies</li>
        <li>Contact</li>
       </ul>
    </div>
    
  )
}

export default Navbar