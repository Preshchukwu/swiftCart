import React from 'react'
import Nav from './components/Nav'
import Effect from './components/UseEffect'
import './MainLayout.css'

const MainLayout = () => {
  return (

    <>
    <div className='main'>
      <Nav> </Nav>

        <div className='theMain'>
            <Effect></Effect>
        </div>
    </div>

    

    </>
  )
}

export default MainLayout
