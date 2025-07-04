import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <Link to="/" className="back">⬅ Back</Link>
      <img src={`http://localhost:5000${movie.posterUrl}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Genres:</strong> {movie.genre.join(', ')}</p>
      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Platforms:</strong> {movie.platforms.join(', ')}</p>
    </div>
  );
};

export default MovieDetail;
