import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../pages/Banner'
import Footer from '../components/Footer'
import Testimonies from '../components/Testimonies'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Testimonies/>
        <Footer/>
       
    </div>
  )
}

export default Home
