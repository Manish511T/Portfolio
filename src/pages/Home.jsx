import React from 'react'
import GridBackground from '../Components/GridBackground'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Title from '../sections/Title'
const Home = () => {
  return (
    <>
    <GridBackground/>
    <div className="home-container ">
      <Navbar/>
      <Hero/>
      <Title/>
    </div>

    </>
  )
}

export default Home