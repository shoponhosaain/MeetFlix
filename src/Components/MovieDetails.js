import useMovieInfo from "../Hooks/useMovieDetails";

const MovieDetails = (props) => {
const {id} = props;
const url = props.data[id-1].imdb_url;

const movieData = useMovieInfo(url)
const movieInfo = props.data[id-1];
  
  return (
    <>
      {movieData &&
      <section className="movie-detail">
        <div className="container">
          <figure className="movie-detail-banner">
            <img
              src={movieData.Poster}
              alt="Free guy movie poster"
            />
            <button className="play-btn">
              <ion-icon name="play-circle-outline" />
            </button>
          </figure>
          <div className="movie-detail-content">
            <p className="detail-subtitle">Trending Movie</p>
            <h1 className="h1 detail-title">
                {movieInfo.movie}
            </h1>
            <div className="meta-wrapper">
              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 13</div>
                <div className="badge badge-outline">HD</div>
              </div>
              <div className="ganre-wrapper">
                <a href="#">{movieData.Genre}</a>
               
              </div>
              <div className="date-time">
                <div>
                  <ion-icon name="calendar-outline" />
                  <time dateTime={2021}>{movieData.Year}</time>
                </div>
                <div>
                  <ion-icon name="time-outline" />
                  <time dateTime="PT115M">{movieData.Runtime}</time>
                </div>
              </div>
            </div>
            <p className="storyline">
            {movieData.Plot}
            </p>
            <div className="details-actions">
              <button className="share">
                <ion-icon name="share-social" />
                <span>Share</span>
              </button>
              <div className="title-wrapper">
                <p className="title">Prime Video</p>
                <p className="text">Streaming Channels</p>
              </div>
              <button className="btn btn-primary">
                <ion-icon name="play" />
                <span>Watch Now</span>
              </button>
            </div>
            <a
              href="./assets/images/movie-4.png"
              download=""
              className="download-btn"
            >
              <span>Download</span>
              <ion-icon name="download-outline" />
            </a>
          </div>
        </div>
      </section>
      }
    </>
  );
};

export default MovieDetails;
