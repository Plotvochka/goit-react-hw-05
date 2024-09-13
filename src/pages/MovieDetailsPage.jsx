import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import getMovieById from "../components/Service/movieDetails-api";
import css from "./MovieDetailsPage.module.css";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

export default function MovieDetailsPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setLoading(true);
        const movieQuery = await getMovieById(movieId);
        setMovie(movieQuery);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div className={css.container}>
      <NavLink to={backLinkRef.current}>Go Back</NavLink>
      <h1 className={css.title}>About Movie</h1>
      {loading && <Loading />}
      {error && <Error />}

      {movie && (
        <div>
          <div className={css.cardWrapper}>
            <div>
              <img
                className={css.movieImg}
                src={`https://image.tmdb.org/t/p/w500${
                  movie.poster_path && movie.poster_path
                }`}
                alt={`${movie.original_title}`}
              />
            </div>
            <div className={css.movieDescription}>
              <p className={css.movieTitle}>{movie.original_title}</p>
              <p> Rating: {movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
            <ul>
              <li className={css.link}>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
