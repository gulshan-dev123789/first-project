import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";



function App() {


 


  return (
  <BrowserRouter>
  <Navbar  />
    <Routes>

    <Route path="/" element={<Home/>} />
      <Route path="/register"  element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>

      <Route   element={<ProtectedRoute/>}>
      <Route path="/profile"  element={<Profile/>}/>
      
      </Route>

      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
