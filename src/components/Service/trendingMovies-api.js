"use strict";

import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmMwYzU1NTkyM2IzNjk0NWNlNmYxMzE4YTJiNjhjOCIsIm5iZiI6MTcyNjEzMjQ4NS4yMjMwNTQsInN1YiI6IjY2ZTJhYzdlYzgxYjI0YjNmZTIzN2ZlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wCX5EY_vgFQvzd7JH_cbtQdtciPEPX66Y-jGqEfhIN4",
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org";

export default async function getDefaultMoviesList() {
  const response = await axios.get(
    "/3/trending/movie/day?language=en-US",
    options
  );
  return response.data;
}
