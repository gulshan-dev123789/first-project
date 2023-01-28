import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Contextuse } from './context/Cprovider';
import "./index.css";

const Login = () => {
  const {state:{isAuth},dispatch}= Contextuse()


  const navigate= useNavigate()
    const {register,handleSubmit,watch,reset,formState: { errors, isValid }}=useForm()

    
    const onSubmiit = async (loginData) => {

    try {
      const {data} = await axios.post("/user/api/login",loginData)
      console.log(data)
      dispatch({type:"AUTHENTICATION",payload:true})

      reset()
      navigate("/profile",{replace:true})
      





      
    } catch (error) {
      console.log(error)
      
    }


        

      }
  return (
    
    <>

    <div className='container d-flex justify-content-center  login-head ' >
    <p className='display-6 text-center ' >please login to se your contribution</p>
      
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
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-12  mb-3 ">
                  <label className="form-label">Password</label>
                  <input data-input type="password" className="form-control" 
                    {...register('password',{required: "Please enter your password."})}
                  />
                   {errors.password && <p>{errors.password.message}</p>}
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
    </>
  
  
  )
}

export default Login
