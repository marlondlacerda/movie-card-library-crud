import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { EditMovieForm, Loading } from '../../components';
import NotFound from '../NotFound';
import * as movieAPI from '../../services/movieAPI';

const EditMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const pageId = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (Object.keys(movie).length === 0) {
      setLoading(true);
      (async () => {
        const data = await movieAPI.getMovie(pageId);

        if (!data) {
          setNotFound(true);
          return setLoading(false);
        }

        setMovie(data);
        setLoading(false);
      })();
    }
  }, [movie, pageId]);

  const handleSubmit = (updatedMovie) => {
    movieAPI.updateMovie(updatedMovie);
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <Loading />;
  }

  if (notFound) {
    return <NotFound />;
  }

  return (
    <div data-testid="edit-movie">
      <div className="edit-movie-box">
        <h2>{ `Editar ${movie.title}`}</h2>
        <EditMovieForm movie={ movie } onSubmit={ handleSubmit } />
      </div>
    </div>
  );
};

export default EditMovie;
