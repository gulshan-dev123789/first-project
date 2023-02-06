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
import Productregister from "./Productregister";
import ProductsListing from "./ProductsListing";
import Cartlisting from "./Cartlisting";
import Payment from "./Payment";




function App() {

const dispatch = useDispatch()
const {loading,auth,user,role,message,err,cart}= useSelector((s)=>s.uses)
 console.log(user)

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
  <Navbar auth={auth} role={role} />
    <Routes>
    <Route path="/" element={<Home auth={auth} />} />
    <Route path="/register"  element={<Register/>}/>
      
    <Route path="/payment" element={<Payment/>} />
    <Route path="/shop" element={<ProductsListing/>} />

    <Route   element={<ProtectedRoute />}>
    <Route path="/profile"  element={<Profile/>}/>
    <Route path="/cartlisting" element={<Cartlisting/>} />

    

    {role=="admin" &&  <>
    
      <Route path="/createproduct" element={<Productregister/>} />
   


    </>}


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


// angali1111@@