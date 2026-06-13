import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-[#808080] flex justify-between items-center w-[80%] m-auto rounded p-2 '>
       <div className="text-2xl text-[#B20710] font-bold ">CineFile</div>
       <ul className="text-[#B20710] flex items-center gap-3 font-bold">
        <li>Home</li>
        <li>Movies</li>
        <li>Contact</li>
       </ul>
    </div>
    
  )
}

export default Navbar