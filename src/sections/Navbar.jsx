import React, { useEffect, useState } from 'react'
const Navbar = () => {
    return (
        <div className='navbar w-screen z-50 p-4 mt-3 flex justify-around items-center text-[#EAEAEA] '>
            <div className='h-full w-[80%] flex justify-evenly items-center '>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border  hover:bg-white/20 hover:scale-110 transform hover:border-white hover:border-1   transition ease-in-out duration-150'>Home</div>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border hover:bg-white/20 hover:scale-110 transform  hover:border-white hover:border-1  transition ease-in-out duration-150'>Projects</div>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border hover:bg-white/20 hover:scale-110 transform  hover:border-white hover:border-1  transition ease-in-out duration-150'>Contacts</div>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border hover:bg-white/20 hover:scale-110 transform  hover:border-white hover:border-1  transition ease-in-out duration-150'>About</div>
            </div>
        </div>
    )
}

export default Navbar