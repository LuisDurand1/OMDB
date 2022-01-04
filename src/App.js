import React, { useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router";
import NewUser from "./components/NewUser";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import  {ShowUsers} from "./commons/ShowUsers";
import MovieInfo from "./commons/MovieInfo";
import Login from "./components/Login";
import { Favorite } from "./commons/Favorite";
import Secret from "./components/Secret";
import { useDispatch, useSelector} from "react-redux";
import { meRequest } from "./state/user";
import { favoriteMovies } from "./state/favorite";
import { getUsers } from "./state/users";

const App = () => {
  const [dataUser, setDataUser] = useState([]);
  const user=useSelector((state)=>state.user)
  const [fav, setFav] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
   
  
  dispatch( meRequest())
     dispatch(getUsers())
 if(user.id) return dispatch(favoriteMovies(user.id))


  }, [user.id]);

console.log(fav)

  return (
    <div>
      <div>
        <Navbar />
      <Switch>
      <Route exact path="/">
         <Secret/>
      </Route>
      <Route exact path="/register">
        <NewUser />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route path="/movie/:id">
        <MovieInfo />
      </Route>

      <Route exact path="/favorite">
        <Favorite  />
      </Route>
    
      <Route exact path="/showusers">
        <ShowUsers  />
      </Route>

     
      </Switch>
    </div>

    </div>
  );
};

export default App;

