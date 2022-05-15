import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Genre, ImagePath, InputRating, Storyline, Subtitle, Title } from './components';

import './EditMovieForm.css';

const EditMovieForm = ({ movie, onSubmit }) => {
  const [editMovie, setEditMovie] = useState(movie);
  const { title, subtitle, imagePath, storyline, rating, genres } = editMovie;

  const handleSubmit = (event) => {
    onSubmit(editMovie);
    event.preventDefault();
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
      <ImagePath value={ imagePath } onChange={ handleChange } />
      <Storyline value={ storyline } onChange={ handleChange } />
      <div className="edit-container">
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
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditMovieForm;
