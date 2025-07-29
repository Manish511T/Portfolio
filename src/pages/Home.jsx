import React from 'react'
import GridBackground from '../Components/GridBackground'
import Navbar from '../Components/Navbar'
const Home = () => {
  return (
    <>
    <GridBackground/>
    <div className="home-container">
      <Navbar/>
    </div>
    </>
  )
}

export default Home