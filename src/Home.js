import React from 'react'


const Home = ({auth}) => {

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center home-container'>
      
      {!auth?(<>
        <div className=' animationdiv  d-flex flex-column align-items-center' >
        <div className='welcome display-3 text-capitalize my-3 '>hello there!</div>
        <div className='welcome display-4 text-capitalize text-center my-3'>for donate please login</div>
        </div>
      </>):(<div className=' animationdiv welcome display-2 text-capitalize text-center '>we are very grateful to you</div>)}
    </div>
  )
}

export default Home
