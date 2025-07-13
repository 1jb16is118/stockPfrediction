import React, { createContext, useState } from 'react'
 const AutContext = createContext()
const AuthProvider = ({children}) => {
   
    const [isLoggin,setIsLoggin] = useState(!!localStorage.getItem("accessToken"))
  return (
    <>
    <AutContext.Provider value={{isLoggin,setIsLoggin}}>
      {children}
    </AutContext.Provider>
      
    </>
  )
}

export default AuthProvider
export  {AutContext}
