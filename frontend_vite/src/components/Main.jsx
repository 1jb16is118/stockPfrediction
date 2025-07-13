import React from 'react'
import Button from '../Button/Button'
function Main() {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction App</h1>
            <p className='text-light'>This is the website you can see the details of any stock. Simpliy the search the stock sybmol or name in sr=earch bar then you gwt all the details regarding that stock. So can anyalys the data.</p>
            <Button text = "Login"  class = "btn-outline-info" url="/login" />       
        </div>
      </div>
    </>
  )
}

export default Main
