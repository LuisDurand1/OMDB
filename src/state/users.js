import {
    createReducer,
    createAction,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  

  export const getUsers=createAsyncThunk("GET_USERS",()=>   {
 return axios.get("/api/user",)
 .then((res)=>res.data)
 .catch((err)=>console.log(err))


  })

  const usersReducer=createReducer( {}, {
   [getUsers.fulfilled]:(state,action)=>action.payload
   
  })

  export default usersReducer