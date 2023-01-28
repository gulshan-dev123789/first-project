import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Contextuse } from './context/Cprovider'

const ProtectedRoute = () => {
const {state:{isAuth},dispatch}= Contextuse()



  return (
    <>
    {isAuth?<Outlet/>:<Navigate to="/login" />}
    </>
  )
}

export default ProtectedRoute
