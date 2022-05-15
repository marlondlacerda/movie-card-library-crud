import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { EditMovieForm, Loading } from '../../components';
import * as movieAPI from '../../services/movieAPI';

const EditMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const getMovie = await movieAPI.getMovie(window.location.pathname.split('/')[2]);
      setMovie(getMovie);
      setLoading(false);
    };

    fetchMovie();
  }, []);

  const handleSubmit = (updatedMovie) => {
    movieAPI.updateMovie(updatedMovie);
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div data-testid="edit-movie">
      { loading ? <Loading />
        : (
          <div className="edit-movie-box">
            <h2>{ `Editar ${movie.title}`}</h2>
            <EditMovieForm movie={ movie } onSubmit={ handleSubmit } />
          </div>
        )}
    </div>
  );
};

export default EditMovie;
