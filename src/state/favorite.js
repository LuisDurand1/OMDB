import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const favoriteMovies = createAsyncThunk("FAVORITE", idUser => {
  return axios
    .get(`/api/favorite/${idUser}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const addFavorite=createAsyncThunk("ADD_FAVORITE",(data)=> {
return axios
.post("/api/favorite",data)
.then((res)=>res.data)
.catch((err)=>console.log(err))
})

export const deleteFavorite=createAsyncThunk("DELETE_FAVORITE",(data)=> {
 return axios
 .delete("/api/favorite/delete",data)
 .then((res)=>res.data)
 .catch((err)=>console.log(err))


})

const favoriteReducer = createReducer( {}, {
  [favoriteMovies.fulfilled]: (state, action) => action.payload,
  [addFavorite.fulfilled]: (state,action) => action.payload,
  [deleteFavorite.fulfilled]: (state,action) =>action.payload
});

export default favoriteReducer;
