import React, { useState } from 'react'
const Navbar = () => {
    // toggle
    const [toggle, setToggle] = useState(false);
    const handleToggle =()=>setToggle(!toggle);
    return (
        <div className='navbar z-50 p-4 mt-3 flex justify-around items-center text-[#EAEAEA] '>
            <div className='h-full w-[80%] flex justify-evenly items-center '>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border  hover:bg-white/20 hover:scale-110 transform hover:border-white hover:border-1   transition ease-in-out duration-150'>Home</div>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border hover:bg-white/20 hover:scale-110 transform  hover:border-white hover:border-1  transition ease-in-out duration-150'>Projects</div>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border hover:bg-white/20 hover:scale-110 transform  hover:border-white hover:border-1  transition ease-in-out duration-150'>Contacts</div>
                <div className='cursor-pointer  h-fit w-22 flex justify-center items-center text-[13px] px-2 py-1.5 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border hover:bg-white/20 hover:scale-110 transform  hover:border-white hover:border-1  transition ease-in-out duration-150'>About</div>
            </div>
            {/* toggle */}
            <div onClick={handleToggle} className='h-full w-fit px-5  flex justify-center items-center cursor-pointer  rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-white/30 border hover:bg-white/20 hover:scale-110 transform  hover:border-white hover:border-1  transition ease-in-out duration-150'>
                {toggle?(<i class="ri-moon-clear-line text-2xl text-cyan-200 transform transition-all ease-in duration-300"></i>):(<i class="ri-sun-fill text-2xl text-amber-400 rotate-90 transform transition-all ease-in duration-300"></i>)}
            </div>
        </div>
    )
}

export default Navbar