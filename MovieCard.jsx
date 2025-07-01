import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={img} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
