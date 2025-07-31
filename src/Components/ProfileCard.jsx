import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProfileCard = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const buttonRef = useRef(null);


    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.fromTo(
            containerRef.current,
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1 }
        )
            .fromTo(imageRef.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.5")
            .fromTo(nameRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
            .fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
            .fromTo(buttonRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, "-=0.3");
    }, []);


    return (
        <div className="flex items-center justify-center     font-orbitron">
            <div  ref={containerRef} className="relative w-80 p-4 rounded-3xl border">

                {/* Glowing border ring animation */}
                <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/30 animate-pulse opacity-30"></div>

                {/* Profile Image */}
                <div className="flex justify-center mt-4">
                    <img
                        ref={imageRef}
                        src="manishPic.png"
                        alt="Profile"
                        className="w-32 h-32 object-cover rounded-full border-4 border-cyan-300 shadow-[0_0_20px_#00f2ff60]"
                    />
                </div>

                {/* Info */}
                <div className="text-center mt-6 text-cyan-100">
                    <h2 ref={nameRef} className="text-xl font-semibold tracking-wider">Manish Kumar Thakur</h2>
                    <p className="text-sm text-cyan-400 mt-1">Web Developer</p>
                    <p ref={descRef}  className="mt-4 text-[13px] text-cyan-200/70 px-4">
                        Passionate about futuristic UIs, JavaScript, and building things that feel alive.
                    </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                    <button ref={buttonRef} className="px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-300/30 rounded-xl backdrop-blur-md bg-white/5 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_#00f2ff80] transition-all duration-300">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
