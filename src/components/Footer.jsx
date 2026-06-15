import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-black'>
            <div className='flex items-center justify-between p-2.5'>
                <h3 className='text-red-600 font-bold text-3xl cursor-pointer'> CineFile</h3>
                <p className='text-white max-w-98 '>CineFile is your gateway to the world of movies.
                    Explore trending titles, discover new favorites,
                    and dive into detailed movie information—all in a
                    cinematic and user-friendly experience.</p>
            </div>
            <div className='text-white text-1xl bg-black flex justify-center pb-2 '>Copyright | All rights reserved 2026</div>
        </div>
    )
}

export default Footer