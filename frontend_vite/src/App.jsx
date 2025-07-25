import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Main/>} />
      <Route path = "/register" element = {<Register/>} />
      <Route path = "/login" element = {<Login/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
