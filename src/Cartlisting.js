import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartlistsingleproduct from './Cartlistsingleproduct'
import "./index.css"
import PriceSection from './PriceSection'
import { cartremove } from './redux/AsyncActions'
const Cartlisting = () => {
const dispatch=useDispatch()
const {role,cart,user}= useSelector((s)=>s.uses)

  return (
    <div className=' container-fluid fullheight '>
    <div className='row'>
    <div className='col-12 col-md-9 order-1 order-md-0  py-5 px-0 px-md-1 d-flex flex-column align-items-center  ' >

    {cart.map((item)=>{
        return <Cartlistsingleproduct cart={item} onClick={(i)=>dispatch(cartremove(i))} />
    })}




    </div>
    <div className='col-12 col-md-3 p-3 order-0 order-md-1 ' style={{border:'1px solid black', height:'80vh'}} >
      <PriceSection  />
    </div>

    </div>
     
    </div>
  )
}

export default Cartlisting
