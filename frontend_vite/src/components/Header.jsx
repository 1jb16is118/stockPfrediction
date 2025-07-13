
import Button from '../Button/Button'
import { Link,useNavigate } from 'react-router-dom'
import { AutContext } from '../AuthProvider'
import { useContext } from 'react'
function Header() {
   const {isLoggin,setIsLoggin} = useContext(AutContext)
   const navigate = useNavigate()
   const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggin(false)
    navigate("/login")
   }
  return (
    <>
      <nav className='navbar container pt-2 pb-3 align-items-start'>
        <Link to="/" className='navbar-brand text-light'>Stock Market Prediction</Link> 
         <div className='d-flex gap-2'>
        {isLoggin ?<button class = "btn btn-danger" onClick={handleLogout} > Logout</button>
        :
        <>
            <Button text = "Login"  class = "btn-outline-info" url="/login" /> 
            <Button text = "Register"  class = "btn-info" url= "/register" />
        </>
        }
          </div>    
      </nav>
    </>
  )
}

export default Header
