import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Duration, Genre, ImagePath, InputRating, Storyline, 
  Subtitle, Title, Year } from './components';

import './EditMovieForm.css';

const checkDuration = (value) => {
  const regexDuration = /^([0-9])h\s[0-5][0-9]m$/g;
  if (regexDuration.test(value)) return true;
  return false;
};

const EditMovieForm = ({ movie, onSubmit }) => {
  const [editMovie, setEditMovie] = useState(movie);
  const { title, subtitle, imagePath, storyline, rating, genres,
    year, duration } = editMovie;

  const handleSubmit = (event) => {
    if (duration && !checkDuration(duration)) {
      event.preventDefault();
      return alert('Duração inválida! Exemplo de texto: "1h 15m"');
    }

    event.preventDefault();
    onSubmit(editMovie);
  };

  const handleChange = ({ target }) => {
    if (target.type === 'select-multiple') {
      const { value } = target;
      const newGenres = genres.includes(value)
        ? genres.filter((genre) => genre !== value)
        : [...genres, value];

      setEditMovie({ ...editMovie, genres: newGenres });
    } else {
      setEditMovie((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  return (
    <form onSubmit={ handleSubmit } className="edit-movie-form">
      <Title value={ title } onChange={ handleChange } />
      <Subtitle value={ subtitle } onChange={ handleChange } />
      <Duration value={ duration } onChange={ handleChange } />
      <ImagePath value={ imagePath } onChange={ handleChange } />
      <Storyline value={ storyline } onChange={ handleChange } />
      <div className="edit-container">
        <Year value={ year } onChange={ handleChange } />
        <InputRating value={ rating } onChange={ handleChange } />
        <Genre value={ genres } onChange={ handleChange } />
      </div>
      <div className="button-container">
        <button
          data-testid="send-button"
          type="submit"
        >
          <span />
          <span />
          <span />
          <span />
          Editar filme
        </button>
      </div>
    </form>
  );
};

EditMovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number,
    duration: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditMovieForm;
