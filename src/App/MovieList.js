import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import Search from './Search'

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    fetch('https://movie-app-0sbe.onrender.com/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(console.error);
  }, []);
  function handleAddMovie(movie) {
    setMovies([...movies, movie]);
  }
  function handleDeleteMovie(id) {
    setMovies(movies.filter(movie => movie.id !== id));
    setSearchResults(searchResults.filter(movie => movie.id !== id));
  }
  function handleSearch(query) {
    setMovies(movies.filter((movie) => movie.title.toLowerCase() === query.toLowerCase()));
  }

 return (
    <div>
      <h1>Movie Finder App</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <Search onSearch={handleSearch} />
      <div className='movie-container'>
      {searchResults.length > 0 ? (
        searchResults.map(movie => (
          <Movie key={movie.id} movie={movie} onDeleteMovie={handleDeleteMovie} />
        ))
      ) : (
        movies.map(movie => (
          <Movie key={movie.id} movie={movie} onDeleteMovie={handleDeleteMovie} />
        ))
      )}
      </div>
    </div>
  );
}
export default MovieList;