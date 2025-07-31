import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef([]);
  navRef.current = [];

  const navItems = ["Home", "Projects", "Contacts", "About"];

  const addToRefs = (el) => {
    if (el && !navRef.current.includes(el)) {
      navRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -20,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <div className="navbar flex justify-center items-center gap-6 mt-10">
      {navItems.map((item, index) => (
        <button
          key={index}
          ref={addToRefs}
          className="px-5 py-2 text-sm text-[#fff] rounded-2xl border border-cyan-400/40 bg-white/5 backdrop-blur-md shadow-[0_0_8px_#00f2ff50]
           hover:bg-cyan-500/10 hover:shadow-[0_0_20px_#00f2ff90] hover:scale-105 transition-all duration-300 font-light
           relative overflow-hidden before:absolute before:inset-0 before:border before:border-cyan-300/30 before:rounded-2xl
           before:animate-pulse"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
