import React from 'react'
import { Contextuse } from './context/Cprovider'

const Home = () => {
  const {state:{isAuth},dispatch}= Contextuse()
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center home-container'>
      
      {!isAuth?(<>
        <div className='d-flex flex-column align-items-center' >
        <div className='welcome display-3 text-capitalize my-3 '>hello there!</div>
        <div className='welcome display-4 text-capitalize my-3'>for donate please login</div>
        </div>
      </>):(<div className='welcome display-2 text-capitalize'>we are very grateful to you</div>)}
    </div>
  )
}

export default Home
