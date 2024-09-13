import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import css from "../MovieList/MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.movieGallery}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.itemGallery}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
