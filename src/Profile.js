import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {loading,auth,user,message}= useSelector((s)=>s.uses)



  return (
   
    <>  <div className='container-fluid d-flex  flex-column justify-content-center align-items-center '>
        <div className='container-fluid d-flex justify-content-center align-items-center profilecover' >
           
            {auth?( <p className='text-capitalize' >welcome to your profile</p> ):(<p className='text-capitalize'>please register first</p>)}
        </div>

        {user?.image?.url?<><div className='profile-picture' > <img  src={user.image.url} /> </div></>:<><div className='profile-picture' > <img  src='unknown.png' /> </div></>}
        </div>

        <div className='container container-fluid d-flex justify-content-center align-items-center ' >

          {auth?(<p className='text-capitalize'>welcome to your Profile <span className='h4 mx-3 '>{user?.name?.firstName}</span> </p>):(<p className='text-capitalize'>null</p>)}
          

        </div>

    </>
      
  )
}

export default Profile
