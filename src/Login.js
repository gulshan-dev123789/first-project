
import { wait } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import "./index.css";
import Loadingpage from './Loadingpage';
import { loginuser } from './redux/AsyncActions';

const Login = () => {
  const navigate = useNavigate()
  const {loading,auth,user,message}= useSelector((s)=>s.uses)
  const dispatchh = useDispatch()


  useEffect(()=>{
    if(auth){
      navigate("/profile")
      
    }
  })
 


const forgotPassord= async()=>{


    navigate("/forgotpassword")
   
}

 

 
const {register,handleSubmit,reset,formState: { errors, isValid }}=useForm()

const onSubmiit = async (loginData) => {

      dispatchh(loginuser(loginData)) 
      reset ()
      }
  
  
  
  
  
  return (
    
    <>

   {loading?<>
   <Loadingpage/>
    
   </>:<>


   <div className='container d-flex justify-content-center  login-head ' >
    <p className='display-6 text-center text-capitalize ' >please login to see your contribution</p>
      
    </div>
      <div className="container my-5  ">
        <div className="row d-flex justify-content-center justify-content-evenly">
          <div className="col-12 col-md-5">
            <div className="container p-3 p-md-5 form-box loginbox ">
            <form onSubmit={handleSubmit(onSubmiit)} >
              

              <div className="row d-flex   justify-content-evenly ">
                <div className="col-12  mb-3">
                  <label className="form-label">Email address</label>
                  <input data-input type="email" className="form-control" 
                    {...register('email',{required: "Please enter Email address."})}
                  />
                  {errors.email && <p className='text-danger mt-3' >{errors.email.message}</p>}
                </div>
                <div className="col-12  mb-3 ">
                  <label className="form-label">Password</label>
                  <input data-input type="password" className="form-control" 
                    {...register('password',{required: "Please enter your password."})}
                  />
                   {errors.password && <p className='text-danger mt-3'  >{errors.password.message}</p>}
                </div>

                <div className="col-12  mb-3 ">
                 <div className='small-text' onClick={forgotPassord} >forgot passwords</div>
                </div>

              </div>

              
               
             
              <div className="row my-3">
                <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-success w-50 "  >Submit</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </>}
    </>
  
  
  )
}

export default Login
