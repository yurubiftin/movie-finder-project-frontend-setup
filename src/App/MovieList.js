import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import Search from './Search';


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9292/movies')
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
    setMovies(movies.filter((movie) => movie.title ===query));
    }
  // function handleLogin(query) {
  //   setMovies(movies.filter((movie) => movie.title ===query));
  // }

  return (
    <div className='movie'>
      <MovieForm onAddMovie={handleAddMovie} />
      <Search onSearch={handleSearch} />
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
  );
}
export default MovieList;