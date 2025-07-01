import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="details">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>⭐ Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
