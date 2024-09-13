import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getMovieCast from "../Service/movieCredits-api";
import css from "../MovieCast/MovieCast.module.css";

export default function MovieCast() {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movieInfo = await getMovieCast(movieId);
        setCast(movieInfo.cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <ul className={css.castList}>
      {casts.map((cast) => (
        <li key={cast.id} className={css.castItem}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${
                cast.profile_path && cast.profile_path
              }`}
              alt={`${cast.original_name}`}
              width="150px"
              height="223px"
            />
          </div>
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
}
