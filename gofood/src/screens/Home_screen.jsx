import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carousal from '../Components/Carousal'
function Home_screen() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className='mx-md-3 m-2 d-flex flex-wrap justify-content-center'>
        <div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-2'>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home_screen
