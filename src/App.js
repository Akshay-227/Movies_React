import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovie = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.results);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getMovie(APIURL);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      getMovie(SEARCHAPI + search);
      setSearch("");
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..."
            value={search}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>
      <div className="movie_container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
