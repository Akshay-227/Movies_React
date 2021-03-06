import React from "react";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote_average) => {
  if (vote_average >= 8) {
    return "green";
  } else if (vote_average >= 6) {
    return "orange";
  } else return "red";
};

function Movie(props) {
  const { title, poster_path, overview, vote_average } = props;
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMGPATH + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80"
        }
        alt={title}
      />
      <div className="movie_info">
        <h3>{title}</h3>
        <span className={` tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie_hover">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
