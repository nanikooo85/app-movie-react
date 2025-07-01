const API_KEY = "28c4fdb853e9ac57ed53e89eb69b6ab9";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query = "spider-man", page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const fetchMovieById = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};
