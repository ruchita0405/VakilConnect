import React from 'react'
import Navbar from '../components/Navbar'
import LawyerDashboard from '../pages/LawyerDashboard'
import Footer from '../components/Footer'

function LawyerDash() {
  return (
    <>
    <div>
        <Navbar/>
        <div classname = "min-h-screen">
          <LawyerDashboard/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default LawyerDash
