import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { Contextuse } from './context/Cprovider';
import "./index.css";
const Navbar = () => {

 const {state:{isAuth},dispatch}= Contextuse()


  const handleLogOut= async()=>{

    
      const {data}=  await axios.post("/user/api/logout",{Headers:{Accept:"application/json","content-type":"application/json"},withCredential:true})
      dispatch({type:"AUTHENTICATION",payload:false})


      

  }



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbarcustum ">
  <div className="container-fluid">
    <Link className="navbar-brand  display-5 navlogo" to="/">Task</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0  " id="navbarNavAltMarkup">
      <div className="navbar-nav margin-child ">
        
      <Link className="nav-link active " to="/">Home</Link>
       {isAuth?(<>
        <div onClick={handleLogOut}><Link className="nav-link" to="/login" >Logout</Link></div>
        <Link className="nav-link" to="/profile">Profile</Link>
       </>):<>
       <Link className="nav-link" to="/register">Sign up</Link>
        <Link className="nav-link" to="/login">Login</Link>
       </>}
    
       
       
      </div>
    </div>
  </div>
</nav>



  )
}

export default Navbar
