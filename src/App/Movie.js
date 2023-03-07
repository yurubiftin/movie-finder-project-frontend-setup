import React from "react";
function Movie({ movie, onDeleteMovie }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/movies/${movie.id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log(movie);
        onDeleteMovie(movie.id);
      })
      .catch(console.error);
  }
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <h3>{movie.genre}</h3>
      <button className="rating">{movie.rating}</button>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={handleDeleteClick}>Delete</button>
      
    </div>
  );
}
export default Movie;