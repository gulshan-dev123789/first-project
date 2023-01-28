import React from 'react'

const Reducer = (state,action) => {

    switch (action.type) {
    case "AUTHENTICATION":
    return {...state,isAuth:action.payload}
        
    
        default:
            return state;
    }





}
export default Reducer
