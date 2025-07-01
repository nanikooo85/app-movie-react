import { useState, useEffect } from "react";
import { fetchMovies } from "../api.js";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("avengers");

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(query);
      setMovies(data.results);
    };
    loadMovies();
  }, [query]);

  return (
    <div className="container">
      <h1>🎬 Movie Browser</h1>
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
