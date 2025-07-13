import axios from "axios"
import {  useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AutContext } from "../AuthProvider"
const Login = () => {
    const [username,setUserName]= useState("")
    const [password,setPassword]  =useState("")
    const [error,setError] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const {isLoggin,setIsLoggin} = useContext(AutContext)
    const navigation = useNavigate()
    const handleLogin = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
        const formData = {username,password}
        try{
            const respponse = await axios.post(`${import.meta.env.VITE_URL}token/`,formData)
            localStorage.setItem('accessToken',respponse.data.access)
            localStorage.setItem('refreshToken',respponse.data.refresh)
            console.log("Login successfully")
            setIsLoggin(true)
            navigation("/")
        }
        catch(error){
            setError("Invalid credential") 
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
                <h1 className='text-light text-center mb-4'>Login</h1>
                <form onSubmit={handleLogin}>
                    <input type='text' value = {username} className='form-control mb-3' onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Username'/>
                    {error.username && <div className='text-light'>{error.username}</div>}
                    <input type='password' value = {password} className='form-control mb-5' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
                    {error.password && <div className='text-danger'>{error.password}</div>}
                    {error && <div className='text-danger'>{error} </div> }
                    {isLoading ? (<button type='submit' className='btn btn-info d-flex mx-auto' disabled>Loading</button>)
                    :(<button type='submit' className='btn btn-info d-flex mx-auto'>Login</button>)}
                    
                </form>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Login
