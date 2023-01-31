import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { profileLoad } from "./redux/AsyncActions";
import Forgotpassword from "./Forgotpassword";
import toast ,{ Toaster } from "react-hot-toast";




function App() {

const dispatch = useDispatch()
const {loading,auth,user,message,err}= useSelector((s)=>s.uses)
 

 useEffect(()=>{


  if(err){
    toast.error(err)
    dispatch({type:"CLEARERROR"})
   }
   if(message){
    toast.success(message)
    dispatch({type:"CLEARMESSAGE"})
   }



 },[err,message,dispatch,])


 useEffect(()=>{
 dispatch(profileLoad())
      
},[dispatch])
 


  return (
  <BrowserRouter>
  <Navbar auth={auth} />
    <Routes>
    <Route path="/" element={<Home auth={auth} />} />
    <Route path="/register"  element={<Register/>}/>
      

    <Route   element={<ProtectedRoute />}>
    <Route path="/profile"  element={<Profile/>}/>
   </Route>

     
      <Route path="/login"  element={<Login/>}/>
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Toaster/>
    
  </BrowserRouter>
  )
}

export default App;
