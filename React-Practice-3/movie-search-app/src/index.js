// src/App.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import axios from 'axios';
import MovieList from './MovieList';
import './styles.css';

function MovieSearchApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = 'dfe2571e';

  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
      setMovies(response.data.Search || []);
      setError(null);
    } catch (error) {
      setMovies([]);
      setError('Error fetching movies. Please try again.');
    }
  };

  return (
    <div className="movie-search-app">
      <h1>Movie Search App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontSize: '20px', padding: '10px', borderRadius: '8px' }}
        />
        <button onClick={searchMovies} style={{ fontSize: '20px', padding: '10px' }}>
          Search
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

// ReactDOM.render is now part of the App component
ReactDOM.render(
  <React.StrictMode>
    <MovieSearchApp />
  </React.StrictMode>,
  document.getElementById('root')
);
