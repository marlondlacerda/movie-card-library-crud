import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Genre, ImagePath, InputRating, Storyline, Subtitle, Title } from './components';

import './AddMovieForm.css';

const initialMovie = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genres: ['Action'],
};

const AddMovieForm = ({ onSubmit }) => {
  const [newMovie, setNewMovie] = useState(initialMovie);
  const { title, subtitle, imagePath, storyline, rating, genres } = newMovie;

  const handleSubmit = (event) => {
    onSubmit(newMovie);
    event.preventDefault();
  };

  const handleChange = ({ target }) => {
    if (target.type === 'select-multiple') {
      const { value } = target;
      const newGenres = genres.includes(value)
        ? genres.filter((genre) => genre !== value)
        : [...genres, value];

      setNewMovie({ ...newMovie, genres: newGenres });
    } else {
      setNewMovie((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  return (
    <form onSubmit={ handleSubmit } className="new-movie-form">
      <Title value={ title } onChange={ handleChange } />
      <Subtitle value={ subtitle } onChange={ handleChange } />
      <ImagePath value={ imagePath } onChange={ handleChange } />
      <Storyline value={ storyline } onChange={ handleChange } />
      <div className="new-container">
        <InputRating value={ rating } onChange={ handleChange } />
        <Genre value={ genres } onChange={ handleChange } />
      </div>
      {/*
      */}
      <div className="button-container">
        <button
          data-testid="send-button"
          type="submit"
        >
          <span />
          <span />
          <span />
          <span />
          Adicionar filme
        </button>
      </div>
    </form>
  );
};

AddMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddMovieForm;
