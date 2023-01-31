import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    loading :false
  },
  {
    USERLOADING: (state, action) => {
      state.loading = true;
    },
    USERLOADED: (state, action) => {
      state.loading = false;
      state.auth = true;
      state.user = action.payload.user;
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
      state.user = action.payload.user;
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







    CLEARERROR: (state, action) => {
      state.err = null;
    },
    CLEARMESSAGE: (state, action) => {
      state.message = null;
    },
  }
);
