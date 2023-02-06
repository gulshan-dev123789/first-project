import React, { useState } from "react";
import {  useForm } from "react-hook-form";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registeruser } from "./redux/AsyncActions";

export default function Register() {
  const navigate= useNavigate()
  const [uploadImage, setUploadImage] = useState();
  const dispatch = useDispatch()

  console.log(uploadImage);

  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    resetField,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  watch();
  // console.log(isValid);

  const transformBase = (file) => {
    const reader = new FileReader();
   
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // console.log(reader.result)
        setUploadImage(reader.result);
      };
    } else {
      setUploadImage("");
    }
  };
  const imageUploader = (e) => {
    const filess = e.target.files[0];
    // console.log(filess)
    transformBase(filess);
  };

  const onSubmit = async (userData) => {

   const dataToSend = {
    ...userData,
    image: uploadImage,
  }
  dispatch(registeruser(dataToSend))
  reset()
  navigate("/login")

    
  };

  const valuedefault = 20;

  return (
    <>
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-center justify-content-evenly">
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center position-relative  ">
            <div className="profile-picture  " data-img="one">
              {uploadImage ? (
                <>
                  <img src={uploadImage} alt="img" />
                </>
              ) : (
                <>
                  <img src="unknown.png" alt="img" />
                </>
              )}
            </div>
            <div className="container p-3 p-md-5 form-box   ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="mb-3">
                    <label className="form-label h5 my-4 ">
                      Upload your profile picture
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      onChange={imageUploader}
                    />
                  </div>
                </div>
                <div className="row d-flex   justify-content-evenly ">
                  <div className="col-12 col-md-6  mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("name.firstName", {
                        required: "Please enter your first name.",
                      })}
                    />
                    {errors.name?.firstName && (
                      <p className="text-danger mt-3">
                        {errors.name?.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="col-12 col-md-6 mb-3 ">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("name.lastName", {
                        required: "Please enter your last name.",
                      })}
                    />
                    {errors.name?.lastName && (
                      <p className="text-danger mt-3">
                        {errors.name?.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row d-flex   justify-content-evenly ">
                  <div className="col-12 col-md-6  mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("email", {
                        required: "Please enter Email address.",
                      })}
                    />
                    {errors.email && (
                      <p className="text-danger mt-3">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="col-12 col-md-6 mb-3 ">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("password", {
                        required: "Please enter your password.",
                      })}
                    />
                    {errors.password && (
                      <p className="text-danger mt-3">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row d-flex   justify-content-evenly ">
                  <div className="col-12 mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      {...register("address.location", {
                        required: "Please enter your address.",
                      })}
                    />
                    {errors.address?.location && (
                      <p className="text-danger mt-3">
                        {errors.address?.location.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row d-flex   justify-content-evenly ">
                  <div className="col-12 col-md-4  mb-3">
                    <label className="form-label">Country</label>
                    <select
                      className="form-select"
                      {...register("address.country", {
                        required: "Please select your Country.",
                      })}
                    >
                      <optgroup label=" select Cuntry">
                        <option>India</option>
                        <option>russia</option>
                        <option>United states</option>
                        <option>U.A.E</option>
                        <option>china</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="col-12 col-md-4  mb-3">
                    <label className="form-label">state</label>
                    <select
                      className="form-select"
                      {...register("address.state", {
                        required: "Please select your state.",
                      })}
                    >
                      <optgroup label=" select state">
                        <option>Delhi</option>
                        <option>UP</option>
                        <option>Himachal</option>
                        <option>kashmir</option>
                        <option>haryana</option>
                        <option>M.P</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="col-12 col-md-4 mb-3 ">
                    <label className="form-label">Postal code</label>
                    <input
                      className="form-control"
                      type="number"
                      {...register("address.postalCode", {
                        required: "enter your postel-Code",
                        valueAsNumber: true,
                        maxLength: {
                          message: "enter your postel-code",
                          value: 6,
                        },
                      })}
                    />
                    {errors.address?.postalCode && (
                      <p className="text-danger mt-3">
                        {errors.address?.postalCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mt-3 ">
                    <div className="mb-3">Select your gender</div>
                    <div className="d-flex  justify-content-between px-2  ">
                      <span className="">
                        <input
                          className="form-check-input mx-2 "
                          type="radio"
                          value="male"
                          {...register("gender", {
                            required: "Please select gender.",
                          })}
                        />
                        <label className="form-check-label ">male</label>
                      </span>

                      <span className="">
                        <input
                          className="form-check-input mx-2 "
                          type="radio"
                          value="female"
                          {...register("gender", {
                            required: "Please select gender.",
                          })}
                        />
                        <label className="form-check-label ">Female</label>
                      </span>
                      <span className="">
                        <input
                          className="form-check-input mx-2 "
                          type="radio"
                          value="transgender"
                          {...register("gender", {
                            required: "Please select gender.",
                          })}
                        />
                        <label className="form-check-label ">
                          Trans-gender
                        </label>
                      </span>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mt-3">
                    <label className="my-1">Select your age</label>

                    <select
                      className="form-select"
                      {...register("age", { required: "please select age" })}
                      defaultValue={valuedefault}
                    >
                      {[...Array(30)].map((_, index) => {
                        return (
                          <option key={index} value={index + 6}>
                            {index + 6}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-success   submit-button  ">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//EMAIL VALIDATION PATTERN
///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

//number validator
///^(0|91)?[6-9][0-9]{9}$/
