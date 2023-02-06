import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    loading: false,
  },
  {
    USERLOADING: (state, action) => {
      state.loading = true;
    },
    USERLOADED: (state, action) => {
      state.loading = false;
      state.auth = true;
      state.role = action.payload.user.role;
      state.user = action.payload.user;
      state.cart = action.payload.user.cart

      state.message = action.payload.message;
    },
    USERERROR: (state, action) => {
      state.loading = false;
      state.auth = false;
      state.err = action.payload;
    },

    PROFILELOADING: (state) => {
      state.loading = true;
    },
    PROFILELODED: (state, action) => {
      state.loading = false;
      state.auth = true;
      state.role = action.payload.user.role;
      state.user = action.payload.user;
      state.cart = action.payload?.user?.cart
    },
    PRPOFILEERROR: (state, action) => {
      state.loading = false;
      state.auth = false;
      state.err = action.payload;
    },

    LOGOUTLOADING: (state) => {
      state.loading = true;
    },
    LOGOUTLODED: (state, action) => {
      state.loading = false;
      state.auth = false;
      state.user = null;
      state.role = null;
      state.message = action.payload;
    },
    LOGOUTERROR: (state, action) => {
      state.loading = false;
      state.auth = false;
      state.err = action.payload;
    },

    REGISTERLOADING: (state) => {
      state.loading = true;
    },
    REGISTERLODED: (state, action) => {
      state.loading = false;

      state.message = action.payload;
    },
    REGISTERERROR: (state, action) => {
      state.loading = false;

      state.err = action.payload;
    },

    PRODUCTLOADING: (state) => {
      state.loading = true;
    },
    PRODUCTLODED: (state, action) => {
      state.loading = false;

      state.message = action.payload;
    },
    PRODUCTERROR: (state, action) => {
      state.loading = false;

      state.err = action.payload;
    },



    SHOPLOADING: (state) => {
      state.loading = true;
    },
    SHOPLODED: (state, action) => {
      state.loading = false;
      state.products = action.payload.product

      
    },
    SHOPERROR: (state, action) => {
      state.loading = false;

      state.err = action.payload;
    },

    CARTLOADING:(state,action)=>{
      state.loading=true
    },
    CARTLOADED:(state,action)=>{
      state.loading=false
      state.message=action.payload.message
      state.cart=action.payload.user.cart
      state.user=action.payload.user

    },
    CARTERROR:(state,action)=>{
      state.loading=false
      state.err=action.payload
    },



    CARTREMOVELOADING:(state,action)=>{
      state.loading=true
    },
    CARTREMOVELOADED:(state,action)=>{
      state.loading=false
      state.message=action.payload?.message
      state.cart=action.payload?.user?.cart
      state.user=action.payload?.user

    },
    CARTREMOVEERROR:(state,action)=>{
      state.loading=false
      state.err=action.payload
    },

    QUANTITYLOADED:(state,action)=>{
      state.message=action.payload?.message
      state.cart=action.payload?.user?.cart
     state.user= action.payload.user
     state.message=action.payload?.message

    },
    QUANTITYERROR:(state,action)=>{
      state.loading=false
      state.err=action.payload
    },





    MESSAGES:(state,action)=>{
      state.message=action.payload
    },


    CLEARERROR: (state, action) => {
      state.err = null;
    },
    CLEARMESSAGE: (state, action) => {
      state.message = null;
    },
  }
);
