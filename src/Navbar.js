
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { IoMdCart } from 'react-icons/io'

import "./index.css";
import { logoutreq } from './redux/AsyncActions';
const Navbar = ({auth}) => {
  const navigate = useNavigate()


  const {role,cart}= useSelector((s)=>s.uses)
  
  const dispatch =useDispatch()

  const handleLogOut= async()=>{  
    dispatch(logoutreq())

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
        <Link className="nav-link" to="/shop">Shop</Link>
       {auth?(<>
        <div onClick={handleLogOut}><Link className="nav-link" to="/login" >Logout</Link></div>
        <Link className="nav-link" to="/profile">Profile</Link>

        <div onClick={()=>navigate("/cartlisting")} style={{maxWidth:'25px' ,cursor:"pointer"}} className=' my-2 mb-my-0 position-relative d-flex justify-content-center align-items-center  '>
        <IoMdCart style={{height:"25px",width:'25px'}} />
        <span className='position-absolute badgee '>{cart.length}</span>
        </div>
      

        {role=="admin" && <Link className="nav-link" to="/createproduct">Create product</Link>}
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
