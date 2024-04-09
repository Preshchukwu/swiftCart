import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='navContainer'>
      <div className='logoAndBrand'>
        <img className='logoImage' src="" alt="" />
        <h2 className='barndName'>SwiftCart</h2>
      </div>

      <div className='linksContainer'>
        <p className='home'>Home</p>
        <p className='link' > Categories</p>
        <p className='link'>Become a Seller</p>
      </div>

      
        <div className='iconAndTextContainer'>
            <div className='iconAndText'>
                <img className='icon' src="/cart.svg" alt="" />
                <p>Cart</p>
            </div>

            <div className='iconAndText'>
                <img src="/location.svg" alt="" />
                <p>Track Order</p>
            </div>
        </div>
    </div>
  )
}

export default Nav
