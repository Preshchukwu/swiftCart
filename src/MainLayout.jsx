import React from 'react'
import Nav from './components/Nav'
import Effect from './components/UseEffect'
import './MainLayout.css'

const MainLayout = () => {
  return (

    <>
    <div className='main'>
      <Nav> </Nav>

        

        <div className="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">Try pick one or two</div>
                <div className="carousel-item">Try pick one or two</div>
                <div className="carousel-item">Try pick one or two</div>
            </div>
        </div>


        <div className='theMain'>
            <Effect></Effect>
        </div>
    </div>

    

    </>
  )
}

export default MainLayout
