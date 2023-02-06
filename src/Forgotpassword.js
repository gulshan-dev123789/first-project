import axios from "axios";
import React, { useState } from "react";

const Forgotpassword = () => {
  const [Email,setEmail]=useState('')
  const  [show , setShow]=useState(false)
  const [errorShow,setErrorShow]=useState(true)



  const forgotpasswordrequest=async(e)=>{
    try {
      console.log(Email)
      const {data}= await axios.post("/user/api/forgotpassword",{email:Email},{Headers:{Accept:"application/json","content-type":"application/json"},credentials:"include"})
      setShow(data.success)
      
    } catch (error) {
      console.log(error.response.data.message)
      setErrorShow(error.response.data.success)



      
    }

  }





  return (
    <>
      <div className=" fullheight container d-flex justify-content-center align-items-center  ">
        <div className="container">
          <div className="row d-flex  justify-content-center align-items-center">
            {!show?<>
              <div className="col-10 col-md-4 ">
              <label className="form-label text-capitalize">enter your email address</label>
              <input
                data-input
                type="email"
                className="form-control "
                onChange={(e)=>setEmail(e.target.value)}
                
              />
              {!errorShow && <><div className="form-label h5 text-danger text-capitalize">invalid email</div></>}
              <span className=" btn btn-success my-4 w-50 " onClick={forgotpasswordrequest} >Click</span>
            </div>
            </>:<>
            <div className="col-10 col-md-4 ">
              <div className="form-label h5 text-capitalize">Token is being send to your email address</div>
              
            </div>
            </>}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
