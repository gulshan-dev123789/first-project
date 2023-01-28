import React, { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";

const Auth = createContext();
const Cprovider = ({ children }) => {





   const [state,dispatch]= useReducer(Reducer,{})


  return <Auth.Provider value={{state,dispatch}} >{children}</Auth.Provider>;
};

export default Cprovider;
export const Contextuse = ()=>{
    return useContext(Auth)
}