import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loadingpage from './Loadingpage'
import { cartadd, cartremove, productsfetch } from './redux/AsyncActions'
import SingleProduct from './SingleProduct'

const ProductsListing = () => {
    const dispatch=useDispatch()
const {products,loading,cart,auth}=useSelector((s)=>s.uses)
// console.log(products)

useEffect(()=>{
    dispatch(productsfetch())
    console.log(cart) 

},[dispatch])
  return (
   <>
    {loading?<>
        <Loadingpage/>
    </>:<>
    <div className=' container d-flex flex-column flex-md-row justify-content-evenly flex-wrap my-5  ' >
    {products?.map((item)=>{
        return <SingleProduct key={item._id} mess={()=> dispatch({type:'MESSAGES',payload:"please login first for add items in cart"})}  onClick={(i)=>dispatch(cartadd(i))} cart={cart} removeItem={(i)=>dispatch(cartremove(i))} item={item} auth ={auth}/>
    })}

        </div>
    </>}


   </>
  )
}

export default ProductsListing












// useEffect(()=>{
//     async function Api (){
//      const data = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=9`)
//      const result = await data.json()
//     setProduct((pre)=> [...pre,...result])
    
    
//     }
//     Api()
//     },[page])
    
    
//     console.log(page)
    
    
//     const infinityScroll=()=>{
//         console.log(window.innerHeight)
//         console.log(document.documentElement.scrollHeight)
//         console.log(document.documentElement.scrollTop)
//         if(window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight) {
//             setPage((pre)=> pre+1 )
//         }
//     }
    
//     useEffect(()=>{ 
//     window.addEventListener('scroll',infinityScroll)
//     return ()=>{
//         removeEventListener('scroll',infinityScroll)
//     }
//     },[])
    