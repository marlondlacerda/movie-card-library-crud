import React from 'react';
import { Redirect } from 'react-router-dom';
import { AddMovieForm } from '../../components';
import * as movieAPI from '../../services/movieAPI';

const NewMovie = () => {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  const handleSubmit = (newMovie) => {
    movieAPI.createMovie(newMovie);
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="new-movie-box">
      <h2>Adicionar Novo Filme</h2>
      <AddMovieForm onSubmit={ handleSubmit } />
    </div>
  );
};

export default NewMovie;
