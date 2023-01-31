import axios from "axios"


export const loginuser = (loginData)=>{
 return async function(dispatch){
   
    try {
        dispatch({type:"USERLOADING"})
        console.log('hi')
        
    const {data} = await axios.post("/user/api/login",loginData,{Headers:{"content-type":"application/json"},credentials:"include"})
    console.log(data)
        dispatch({type:"USERLOADED",payload:data})
       

    } catch (error) {
        dispatch({type:"USERERROR",payload:error.response.data.message})

        
    }

 }

}



export const profileLoad = ()=>{
    return async function(dispatch){
      
       try {
           dispatch({type:"PROFILELOADING"})
       
           const {data} = await axios.get("/user/api/info",{Headers:{Accept:"application/json","content-type":"application/json"},credentials:"include"})
            console.log(data)
       console.log("pro")
           dispatch({type:"PROFILELODED",payload:data})

   
       } catch (error) {
           dispatch({type:"PRPOFILEERROR",payload:error.response.data.message})
           
       }
   
    }
   
   }









export const logoutreq = ()=>{
    return async function(dispatch){
      
       try {
           dispatch({type:"LOGOUTLOADING"})
           
           const {data}=  await axios.get("/user/api/logout",{credentials:"include"})
           console.log(data)

   
           dispatch({type:"LOGOUTLODED",payload:data.message})
   
       } catch (error) {
           dispatch({type:"LOGOUTERROR",payload:error.response.data.message})
           
       }
   
    }
   
   }









   





   export const registeruser = (userdata)=>{
    
    return  async function(dispatch){
        



        try {
            dispatch({type:"REGISTERLOADING"})
            console.log("register");
            const { data } = await axios.post("/user/api/register",userdata );
            console.log(data);
            dispatch({type:"REGISTERLODED", payload:data.message})
      
         
           
          } catch (error) {
            console.log(error);
            dispatch({type:"REGISTERERROR",payload:error.response.data.message})
          }








    } 
   }