import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./index.css"

const SingleProduct = ({item ,onClick,cart,removeItem ,auth ,mess}) => {
 const [qty,setqty]= useState(1)
  
  return (
   <>
   <div className="card mb-3 p-3 singleproduct" style={{maxWidth:"400px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.productimage.url} className="img-fluid rounded-start" alt="image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item?.productname}</h5>
        
        
        <p className="card-text opacity-50 lh-sm tetx-justify  ">{item?.discription.slice(0,45)}...</p>
        <p className="card-text"><small className="text-muted">Last updated {(Math.random()*20).toString().slice(3,5)} mins ago</small></p>
        
         {auth?<>
          {cart?.some((s)=>s?._id==item?._id )?<>
          <button className='btn btn-danger  ' onClick={()=>removeItem(item)} >Remove from cart</button>
        </>:<> 

        <button className='btn btn-success' onClick ={()=>onClick(item)} >Add to cart</button>
        </>} 
         </>:<>
         <button  className='btn btn-success' onClick={()=> mess()} >Add to cart</button>
         </>}
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default SingleProduct
