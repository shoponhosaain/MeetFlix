
import useMovieInfo from '../Hooks/useMovieDetails';

const Card = (props) => {
  const { name, rating, url } = props;

      const movieData =  useMovieInfo(url);


  return (
    <>
      {movieData ? (
        <li>
          <div className="movie-card">
            <a href="./movie-details.html">
              <figure className="card-banner">
                <img
                  src={movieData.Poster}
                  alt={`${name} movie poster`}
                />
              </figure>
            </a>
            <div className="title-wrapper">
              <a href="./movie-details.html">
                <h3 className="card-title">{name}</h3>
              </a>
              <time dateTime={movieData.Year}>{movieData.Year}</time>
            </div>
            <div className="card-meta">
              <div className="badge badge-outline">HD</div>
              <div className="duration">
                <ion-icon name="time-outline" />
                <time dateTime={`PT${movieData.Runtime}`}>{movieData.Runtime}</time>
              </div>
              <div className="rating">
                <ion-icon name="star" />
                <data>{rating}</data>
              </div>
            </div>
          </div>
        </li>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Card;
