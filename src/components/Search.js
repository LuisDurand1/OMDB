import React from "react";
import { useState } from "react/cjs/react.development";
import useInput from "../hooks/useInput";
import Movies from "../commons/Movies";

import axios from "axios";

const Search = () => {
  const [movies, setMovies] = useState([]);

  const search = useInput();

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=959ee6fb&s=${search.value}`)
      .then((res) => res.data)
      .then((movies) => setMovies(movies.Search));
  };

  return (
    <div>
        <p class="control has-icons-left">
          <form onSubmit={handleSumbit}>
            <input class="input" type="text" placeholder="Search" {...search} />
          </form>

          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>

      <Movies data={movies} />
      
    </div>
  );
};

export default Search;
