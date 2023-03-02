import React from 'react';

function Movie({ movie, onDeleteMovie }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/movies/${movie.id}`, {
      method: 'DELETE'
    })
      .then(() => onDeleteMovie(movie.id))
      .catch(console.error);
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Movie;
