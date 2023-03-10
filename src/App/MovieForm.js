import React, { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://movie-app-0sbe.onrender.com/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        onAddMovie(data);
        setFormData({ title: '', description: '', image_url: '' });
      })
      .catch(console.error);
  }

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" required value={formData.title} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" required value={formData.description} onChange={handleInputChange} />
      <input type="text" name="image_url" placeholder="Image URL" required value={formData.image_url} onChange={handleInputChange} />
      <input type="text" name="genre" placeholder="Genre" required value={formData.genre} onChange={handleInputChange} />
      <input type="number" name="rating" placeholder="Rating" required value={formData.rating} onChange={handleInputChange} />

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm