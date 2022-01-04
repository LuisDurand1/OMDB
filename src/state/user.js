import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  email: null,
  fullname: null,
  id: null,
};


export const setUser = createAction("SET_USER");

export const login = createAsyncThunk("LOGIN", (value) => {
  return axios.post("/api/auth/login", value)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const meRequest=createAsyncThunk("ME",()=>  {
return axios.get("/api/auth/home",)
 .then((res)=>res.data)
 .catch((err)=>console.log(err))
 
  
})

export const register=createAsyncThunk("REGISTER",(value)=>  {
return axios.post("/api/auth/register", value)
       .then((res)=>res.data)
       .catch((err)=>console.log(err))



})

export const logout=createAsyncThunk("LOGOUT",()=>  {

return axios.post("/api/auth/logout")
.then((res)=> { return initialState })
.catch((err) => 
  console.log( err ));

})

const userReducer = createReducer(
  {},
  {
    [setUser]: (state, action) => action.payload,
    [login.fulfilled]: (state, action) => action.payload,
    [meRequest.fulfilled]: (state,action) => action.payload,
    [logout.fulfilled]: (state,action)=>action.payload
  }
);

export default userReducer;
