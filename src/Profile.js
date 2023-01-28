import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
const[state,setState]=useState()
const[success,setSuccess]=useState(false)
const[name,setName]=useState()

const constuserInfo=async()=>{
  try {
    const {data} = await axios.get("/user/api/info",{Headers:{Accept:"application/json","content-type":"application/json"},withCredential:true})
    // console.log(data)
    setSuccess(data.success)
    // console.log(data.user.name.firstName)
    setName(data.user.name.firstName)



    
    
 




    
  } catch (error) {
    // console.log(error.response.data.message)
    setState(error.response.data.message)
    
  }



}


  useEffect(()=>{
    constuserInfo()
  },[])
  return (
   
    <>  <div className='container-fluid d-flex  flex-column justify-content-center align-items-center '>
        <div className='container-fluid d-flex justify-content-center align-items-center profilecover' >
           
            {success?( <p className='text-capitalize' >welcome to your profile</p> ):(<p className='text-capitalize'>please register first</p>)}
        </div>

        <div className='profile-picture' > <img  src='unknown.png' /> </div>
        </div>

        <div className='container container-fluid d-flex justify-content-center align-items-center ' >

          {success?(<p className='text-capitalize'>welcome to your Profile <span className='h4 mx-3 '>{name}</span> </p>):(<p className='text-capitalize'>{state}</p>)}
          

        </div>

    </>
      
  )
}

export default Profile
