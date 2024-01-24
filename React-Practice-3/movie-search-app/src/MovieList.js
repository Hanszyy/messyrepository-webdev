// src/MovieList.js
import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  const moviesPerRow = 4; // Have the movies in a row
  const gapBetweenMovie = 50 // Spaces between each movie to look nice

  const rows = [];
  for (let i = 0; i < movies.length; i += moviesPerRow) {
    const rowMovies = movies.slice(i, i + moviesPerRow);
    rows.push(
      <div key={i} style={{ display: 'flex', marginBottom: '20px' }}>
        {rowMovies.map((movie, index) => (
          <div key={movie.imdbID} style={{ marginRight: index < moviesPerRow - 1 ? `${gapBetweenMovie}px` : '0' }}>
            <Movie title={movie.Title} year={movie.Year} poster={movie.Poster} />
          </div>
        ))}
      </div>
    );
  }

  return <div className="movie-list">{rows}</div>;
}

export default MovieList;
