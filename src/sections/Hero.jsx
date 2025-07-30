import React, { useEffect, useRef, useState } from 'react';
import Terminal from '../Components/Terminal';
import ProfileCard from '../Components/ProfileCard';




const Hero = () => {


    return (
        <div className='hero-container h-fit w-screen mt-20 flex flex-wrap-reverse items-center justify-around '>
            <Terminal/>
            <ProfileCard/>
        </div>
    )
}

export default Hero