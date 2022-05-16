import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const TextInputLabel = ({ searchText, onSearchTextChange }) => (
  <div className="search">
    <label htmlFor="searchText" className="input-label">
      Inclui o texto
      <input
        id="searchText"
        className="search__input"
        type="text"
        name="searchText"
        value={ searchText }
        placeholder="enter your search"
        onChange={ onSearchTextChange }
      />
    </label>
    <button type="button" className="search__submit">
      <FontAwesomeIcon icon={ faSearch } />
    </button>
  </div>
);

TextInputLabel.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default TextInputLabel;
