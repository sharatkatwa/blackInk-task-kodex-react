import React from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Navbar from '../components/Navbar'

const AuthLayout = () => {
  return (
  <div className='font-giest bg-[var(--bg)] text-[var(--text)] transition-colors duration-500'>
    <ToastContainer />
    <Navbar/>
    
    <Outlet />
  </div>
  )
}

export default AuthLayout