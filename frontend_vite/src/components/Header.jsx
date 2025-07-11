import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className='navbar container pt-2 pb-3 align-items-start'>
        <Link to="/" className='navbar-brand text-light'>Stock Market Prediction</Link> 
        <div className='d-flex gap-2'>
            <Button text = "Login"  class = "btn-outline-info" url="/" /> 
             <Button text = "Register"  class = "btn-info" url= "/register" />
        </div>
      </nav>
    </>
  )
}

export default Header
