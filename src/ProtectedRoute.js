import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
 const { loading,auth,user,message  }= useSelector((s)=>s.uses)





  return (
    <>
    {auth?<Outlet/>:<Navigate to="/login" />}
    </>
  )
}

export default ProtectedRoute
