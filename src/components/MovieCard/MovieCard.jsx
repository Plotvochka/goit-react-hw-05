import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function MovieCard({ movie }) {
  const location = useLocation();
  return (
    <>
      <Link to={`/movies/${movie.id}`} state={location}>
        {movie.original_title}
      </Link>
      <p>Rating: {movie.vote_average}</p>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
