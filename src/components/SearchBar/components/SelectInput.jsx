import React from 'react';
import PropTypes from 'prop-types';
import './SelectInput.css';

const SelectInputLabel = ({ selectedGenre, onSelectedGenreChange }) => (
  <div className="search-genre">
    <label
      htmlFor="selectedGenre"
      data-testid="select-input-label"
    >
      Filtrar por gênero:
    </label>
    <select
      className="search-select-input"
      name="selectedGenre"
      data-testid="select-input"
      value={ selectedGenre }
      onChange={ onSelectedGenreChange }
    >
      <option value="" data-testid="select-option">Todos</option>
      <option value="Action" data-testid="select-option">Ação</option>
      <option value="Adventure" data-testid="select-option">Aventura</option>
      <option value="Fantasy" data-testid="select-option">Fantasia</option>
      <option value="Anime" data-testid="select-option">Anime</option>
      <option value="Sci-fi" data-testid="select-option">Sci-fi</option>
      <option value="Crime" data-testid="select-option">Crime</option>
      <option value="Drama" data-testid="select-option">Drama</option>
      <option value="Mystery" data-testid="select-option">Suspense</option>
      <option value="Terror" data-testid="select-option">Terror</option>
    </select>
  </div>
);

SelectInputLabel.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectInputLabel;
