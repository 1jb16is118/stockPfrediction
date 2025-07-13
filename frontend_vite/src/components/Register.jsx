import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [success,setsetSucess] = useState("")
    const [error,setError] = useState("")
    const [isLoading,setIsLoading] = useState(false)
//  fields = ["username",'email','password']

    const handleRegister = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
        const formData = {
            username,email,password
        }
        console.log(formData)
        const Url = import.meta.env.VITE_URL 
        console.log(Url)
        try{
        const responce = await axios.post(`${Url}register/`,formData)
        console.log(responce.data)
        console.log("success")
        setsetSucess(true)
        setError({})
        }
        catch(error){
            console.log("error ",error)
            // setsetSucess(`Error came: ${error.message}`)
            setError(error.response.data)
            
        }
        finally{
            setIsLoading(false)
        }
    }
  return (
    <>
    <div className='container'>
        <div className=' row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5'>
                <h1 className='text-light text-center mb-4'>Create a Account</h1>
                <form onSubmit={handleRegister}>
                    <input type='text' value = {username} className='form-control mb-3' onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Username'/>
                    {error.username && <div className='text-light'>{error.username}</div>}
                    <input type='email' value = {email} className='form-control mb-3' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
                    <input type='password' value = {password} className='form-control mb-5' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
                    {error.password && <div className='text-danger'>{error.password}</div>}
                    {success && <div className='text-success'>Succefully </div> }
                    {isLoading ? (<button type='submit' className='btn btn-info d-flex mx-auto' disabled>Loading</button>)
                    :(<button type='submit' className='btn btn-info d-flex mx-auto'>Register</button>)}
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
