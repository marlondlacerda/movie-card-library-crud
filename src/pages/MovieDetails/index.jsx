import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faHeartCirclePlus,
  faHeartCircleMinus,
  faPenToSquare,
  faFileCircleXmark } from '@fortawesome/free-solid-svg-icons';

import * as movieAPI from '../../services/movieAPI';
import { Loading } from '../../components';

import './MovieDetails.css';

const MovieDetails = () => {
  const id = parseInt(window.location.pathname.split('/')[2], 10);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/');
  const { deleteMovie, updateMovie } = movieAPI;

  useEffect(() => {
    if (Object.keys(movie).length === 0) {
      setLoading(true);
      (async () => {
        const data = await movieAPI.getMovie(id);

        if (!data) return setShouldRedirect(true);

        const { imagePath } = data;

        data.imagePath = imagePath.includes('images/') ? `../${imagePath}` : imagePath;
        setMovie(data);
        setLoading(false);
      })();
    }
  }, [id, movie]);

  const handleSubmit = (bookmarked) => {
    movie.bookmarked = !bookmarked;
    updateMovie(movie);
    (async () => {
      const data = await movieAPI.getMovie(id);
      setMovie(data);
    })();
  };

  const updateRedirect = () => {
    setRedirectPath(`/movies/${id}/edit`);
    setShouldRedirect(true);
  };

  const deleteAndRedirect = () => {
    deleteMovie(id);
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect to={ redirectPath } />;
  }

  const { title, storyline, imagePath, bookmarked, genres, duration,
    rating, year, subtitle } = movie;

  return (loading ? <Loading /> : (
    <div className="movie-details-container">
      <div
        className="movie-details-head"
        style={
          { backgroundImage: `url(${imagePath})` }
        }
      >
        <div className="movie-details-head-box">
          <div className="movie-details-head-box-icon" title="Voltar">
            <FontAwesomeIcon
              role="button"
              onClick={ () => setShouldRedirect(true) }
              icon={ faArrowLeftLong }
              className="movie-details-head-box-font"
            />
          </div>
          <div className="movie-details-head-box-icon" title="Favoritar?">
            <FontAwesomeIcon
              role="button"
              onClick={ () => handleSubmit(bookmarked) }
              icon={ bookmarked ? faHeartCircleMinus : faHeartCirclePlus }
              className={
                `movie-details-head-box-font ${bookmarked
                  ? 'bookmarked-true' : 'bookmarked-false'}`
              }
            />
          </div>
        </div>
      </div>
      <div className="movie-details-description-container">
        <h1 className="movie-details-head-title">{ `${title}` }</h1>
        <div className="movie-details-description-box-title">
          <span className="movie-details-description-span">
            {
              `${year}⠀•⠀${genres.join('-')}⠀•⠀${duration}`
            }
          </span>
        </div>
        <Rating
          initialValue={ rating }
          readonly
          iconsCount={ 10 }
          fillColor="#F2A33A"
          size={ 30 }
        />
        <div className="movie-details-description-text">
          <h2>{ subtitle }</h2>
          <div className="movie-details-description-button">
            <div className="movie-details-head-box-icon" title="Editar">
              <FontAwesomeIcon
                role="button"
                onClick={ () => updateRedirect() }
                icon={ faPenToSquare }
              />
            </div>
            <div className="movie-details-head-box-icon" title="Deletar">
              <FontAwesomeIcon
                role="button"
                icon={ faFileCircleXmark }
                onClick={ () => deleteAndRedirect() }
              />
            </div>
          </div>
        </div>
        <p>{ storyline }</p>
        <hr />
      </div>
    </div>
  ));
};

export default MovieDetails;
