import React from 'react'
import { UseAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedAuth = () => {
 const {LoggedInUser} = UseAuth()
 if(LoggedInUser){
   return <Navigate to={'/'} />
 }
  return (
    <Outlet />
  )
}

export default ProtectedAuth