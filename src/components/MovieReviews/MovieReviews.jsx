import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getMovieReviews from "../Service/movieReviews-api";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import css from "../MovieReviews/MovieReviews.module.css";

export default function MovieReviews() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setLoading(true);
        const movieInfo = await getMovieReviews(movieId);
        setReviews(movieInfo);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={css.author}>{review.author}</p>
            <p className={css.content}>{review.content}</p>
            <a href={review.url} target="_blank">
              Link
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
