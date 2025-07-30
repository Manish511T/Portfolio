import React from 'react'
import GridBackground from '../Components/GridBackground'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
const Home = () => {
  return (
    <>
    <GridBackground/>
    <div className="home-container ">
      <Navbar/>
      <Hero/>
    </div>

    </>
  )
}

export default Home