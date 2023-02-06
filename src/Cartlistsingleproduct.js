import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { addingQuantity } from "./redux/AsyncActions";

const Cartlistsingleproduct = ({ cart, onClick }) => {
const {loading,auth,user,role,message,err,cart:ca}= useSelector((s)=>s.uses)
  
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-center ">
        <div className="card mb-3 p-3 " style={{ maxWidth: "500px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={cart?.productimage?.url}
                className="img-fluid rounded-start"
                alt="image"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{cart?.productname}</h5>
                <small>{cart?.productprice}₹</small>
                <div className="cart-text" >
                  <p>Select quantity</p>
                  <select value={ca?.productqty} onChange={(e)=> dispatch(addingQuantity(e.target.value,cart?._id))} className="form-select form-select-sm " >
            
            {[...Array(5)].map((_,i)=>{
              return <option key={i} value={i+1} >{i+1}</option>
            })}
            
          </select>
                </div>
                <div className="btn btn-danger my-2 "  onClick={()=>onClick(cart)} >Remove Item</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartlistsingleproduct;



