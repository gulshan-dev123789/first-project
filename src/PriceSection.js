import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from './redux/AsyncActions'

const PriceSection = () => {
  const dispatch=useDispatch()
const {role,user,cart}= useSelector((s)=>s.uses)
const [bill, setPrice]=useState()



useEffect(()=>{
  
    setPrice( cart.reduce((acc,item)=>{
        return acc+(item.productprice*item.productqty)

    },0))

},[user])
  return (
    <div>
    {cart.map((item)=>{
        return  <div>{ item.productname}: {item.productprice}*<span className='ml-4'>{item.productqty} item</span></div>
     
    })}
    <div> Total-bill : {bill}₹</div>
      <button className='btn btn-success' onClick={()=> dispatch(createOrder(bill))} >pay your bill</button>
    </div>
  )
}

export default PriceSection




