// src/Movie.js
import React from 'react';

function Movie({ title, year, poster }) {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={poster} alt={`${title} Poster`} />
    </div>
  );
}

export default Movie;
