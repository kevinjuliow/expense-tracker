import React from 'react'
import NavBar from '../../components/NavBar'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'

const Homepage = () => {
  return (
    <div className='w-[1200px] m-auto'>
      <NavBar/>
      <Home/>
      <AboutUs/>
      <Contact/>
    </div>
  )
}

export default Homepage