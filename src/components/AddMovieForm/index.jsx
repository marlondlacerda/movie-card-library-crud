import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Duration, Genre, ImagePath, InputRating, Storyline, Subtitle,
  Title, Year } from './components';

import './AddMovieForm.css';

const initialMovie = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genres: ['Action'],
  year: 2022,
  duration: '',
  bookmarked: false,
};

const checkDuration = (value) => {
  const regexDuration = /^([0-9])h\s[0-5][0-9]m$/g;
  if (regexDuration.test(value)) return true;
  return false;
};

const AddMovieForm = ({ onSubmit }) => {
  const [newMovie, setNewMovie] = useState(initialMovie);
  const { title, subtitle, imagePath, storyline, rating, genres,
    year, duration } = newMovie;

  const handleSubmit = (event) => {
    if (duration && !checkDuration(duration)) {
      event.preventDefault();
      return alert('Duração inválida! Exemplo de texto: "1h 15m"');
    }

    event.preventDefault();
    onSubmit(newMovie);
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
      <Duration value={ duration } onChange={ handleChange } />
      <ImagePath value={ imagePath } onChange={ handleChange } />
      <Storyline value={ storyline } onChange={ handleChange } />
      <div className="new-container">
        <Year value={ year } onChange={ handleChange } />
        <InputRating value={ rating } onChange={ handleChange } />
        <Genre value={ genres } onChange={ handleChange } />
      </div>
      <div className="button-container">
        <button type="submit">
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
