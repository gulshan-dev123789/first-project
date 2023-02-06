import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { productsRegister } from "./redux/AsyncActions";
const Productregister = () => {
  const dispatch = useDispatch();
  const [productimage, setProductImage] = useState("unknown.png");
  const [productDetail, setProductDetail] = useState({
    productname: "",
    discription: "",

    productprice: "",
    producttype: "",
  });

  const transformBase = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // console.log(reader.result)
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
  };

  const productImage = (e) => {
    const file = e.target.files[0];

    transformBase(file);
  };

  const handle = (e) => {
    const { name, value } = e.target;
    setProductDetail((pre) => {
      return { ...pre, [name]: value };
    });
    console.log(productDetail);
  };

  const submitt = (e) => {
    e.preventDefault();
    const sendDetails = { ...productDetail, productimage };
    dispatch(productsRegister(sendDetails));
    setProductDetail({
      productname: "",
      discription: "",

      productprice: "",
      producttype: "",
    });
    setProductImage("unknown.png");
  };

  return (
    <>
      <div className="container  ">
        <div className="row d-flex justify-content-center align-content-center">
          <div className="text-capitalize text-center h3 my-5 mx-auto ">
            create a valid product
          </div>
          <div className="col-12 col-md-6 px-5 my-3 order-1 order-md-0 ">
            <form onSubmit={submitt}>
              <div className="mb-3">
                <label className="form-label h5 my-4  ">
                  Upload product picture
                </label>
                <input
                  className="form-control"
                  type="file"
                  onChange={productImage}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Product name</label>
                <input
                  type="text"
                  className="form-control"
                  value={productDetail.productname}
                  name="productname"
                  onChange={handle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">description</label>
                <input
                  type="text"
                  className="form-control"
                  value={productDetail.discription}
                  name="discription"
                  onChange={handle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">product-type</label>
                <input
                  type="text"
                  className="form-control"
                  value={productDetail.producttype}
                  name="producttype"
                  onChange={handle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={productDetail.productprice}
                  name="productprice"
                  onChange={handle}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-3 order-0 order-md-1 ">
            <div className="image-fit">
              {productImage ? (
                <>
                  <img className="image-cover" src={productimage} />
                </>
              ) : (
                <>
                  <img className="fit-img" src="unknown.png" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productregister;
