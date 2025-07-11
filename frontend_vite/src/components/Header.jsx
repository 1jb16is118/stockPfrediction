import React from 'react'
import Button from '../Button/Button'

function Header() {
  return (
    <>
      <nav className='navbar container pt-2 pb-3 align-items-start'>
        <a href="#" className='navbar-brand text-light'>Stock Market Prediction</a>
        <div className='d-flex gap-2'>
            <Button text = "Login"  class = "btn-outline-info" />
            <Button text = "Register"  class = "btn-info" />
        </div>
      </nav>
    </>
  )
}

export default Header
