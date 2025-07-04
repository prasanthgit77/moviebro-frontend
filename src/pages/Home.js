import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async () => {
    const res = await axios.get('https://moviebro-backend.onrender.com/api/movies/latest');
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      fetchMovies();
    } else {
      const res = await axios.get(`https://moviebro-backend.onrender.com/api/movies/search?q=${term}`);
      setMovies(res.data);
    }
  };

  return (
    <div className="home-page">
      <h1>🎬 Movie Bro</h1>
      <input
        type="text"
        placeholder="Search by title or genre..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
