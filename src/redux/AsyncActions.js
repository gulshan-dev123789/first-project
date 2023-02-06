import axios from "axios"


export const loginuser = (loginData)=>{
 return async function(dispatch){
   
    try {
        dispatch({type:"USERLOADING"})
        // console.log('hi')
        
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
            // console.log(data)
    //    console.log("pro")
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
        //    console.log(data)

   
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
            // console.log("register");
            const { data } = await axios.post("/user/api/register",userdata );
            // console.log(data);
            dispatch({type:"REGISTERLODED", payload:data.message})
      
         
           
          } catch (error) {
            // console.log(error);
            dispatch({type:"REGISTERERROR",payload:error.response.data.message})
          }


    } 
   }






   export const productsRegister=(item)=>{
    return async function(dispatch){
    try {
        
        dispatch({type:"PRODUCTLOADING"})


        const { data } = await axios.post("/api/productregiter",item);
        // console.log(data)
        dispatch({type:"PRODUCTLODED",payload:data.message})
    } catch (error) {
        dispatch({type:"PRODUCTERROR",payload:error.response.data.message})
        
    }

    }
   }



   export const productsfetch=(item)=>{
    return async function(dispatch){
    try {
        
        dispatch({type:"SHOPLOADING"})


        const { data } = await axios.get("/api/productregiter",{credentials:"include"});

        dispatch({type:"SHOPLODED",payload:data})
     
    } catch (error) {
        dispatch({type:"SHOPERROR",payload:error.response.data.message})
        
    }

    }
   }






   export const cartadd = (product)=>{
    return async function (dispatch){
       try {
    
        dispatch({type:'CARTLOADING'})
    const {data}= await axios.post("/user/api/addtocart",product,{Headers:{"content-type":"application/json"},credentials:"include"} )
        dispatch({type:'CARTLOADED',payload:data})
        // console.log("cRart loaded")
        
       } catch (error) {
        // console.log(error.response.data.message)
        dispatch({type:'CARTERROR',payload:error.response.data.message})
       }
    }
   }


   export const cartremove = (product)=>{
    return async function (dispatch){
       try {
       
        dispatch({type:'CARTREMOVELOADING'})
    const {data}= await axios.post("/user/api/removefromcart",product,{Headers:{"content-type":"application/json"},credentials:"include"} )
        dispatch({type:'CARTREMOVELOADED',payload:data})
      
       } catch (error) {
        
        dispatch({type:'CARTREMOVEERROR',payload:error.response.data.message})
       }
    }
   }







   export const addingQuantity = (qty,id)=>{
    return async function (dispatch){
       try {
        
       
     const {data}= await axios.post("/user/api/addingquantity",{qty,id},{Headers:{"content-type":"application/json"},credentials:"include"} )
        dispatch({type:'QUANTITYLOADED',payload:data})
       console.log(data)
        
       } catch (error) {
        console.log(error.response.data.message)
         dispatch({type:'QUANTITYERROR',payload:error.response.data.message})
       }
    }
   }






   //create order


   export const createOrder = (bill)=>{


    return async function (dispatch){

        const {data:{apiKey}}= await axios.get("api/razorpaykey",{credentials:"include"})
        console.log(apiKey)

        const {data:{data}} = await axios.post("/api/createorder",{bill},{Headers:{"content-type":"application/json"},credentials:"include"})
        // console.log(data)
        


       const options = {
            "key": apiKey, // Enter the Key ID generated from the Dashboard
            "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency":data.currency,
            "name": "King-donation",
            "description": "Test Transaction",
            "image": "donation.jpg",
            "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:5000/api/paymentvarification",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const razor = new window.Razorpay(options)
        razor.open()

    }
   }