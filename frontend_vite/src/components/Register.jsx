import React, { useState } from 'react'

const Register = () => {
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleRegister =  (e) =>{
        e.preventDefault()
        const formData = {
            username,email,password
        }
        console.log(formData)
    }
  return (
    <>
    <div className='container'>
        <div className=' row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5'>
                <h1 className='text-light text-center mb-4'>Create a Account</h1>
                <form onSubmit={handleRegister}>
                    <input type='text' value = {username} className='form-control mb-3' onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Username'/>
                    <input type='email' value = {email} className='form-control mb-3' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
                    <input type='password' value = {password} className='form-control mb-5' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
                    <button type='submit' className='btn btn-info d-flex mx-auto'>Register</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
