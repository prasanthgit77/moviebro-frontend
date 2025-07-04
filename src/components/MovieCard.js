import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie._id}`} className="movie-card-link">
        <div className="movie-card">
          <img
            src={`https://moviebro-backend.onrender.com${movie.posterUrl}`}
            alt={movie.title}
            className="poster"
          />
          <div className="movie-title">{movie.title}</div> {/* <-- moved inside */}
          <div className="card-hover-info">
            <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
            <p><strong>Platforms:</strong> {movie.platforms.join(', ')}</p>
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default MovieCard;
