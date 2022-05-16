import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ value, onChange }) => (
  <div className="new-container-genre">
    <label htmlFor="genres">
      Gênero
    </label>
    <select
      name="genres"
      className="new-select"
      id="genres"
      value={ value }
      onChange={ onChange }
      multiple
    >
      <option value="Action">Ação</option>
      <option value="Adventure">Aventura</option>
      <option value="Fantasy">Fantasia</option>
      <option value="Anime"> Anime</option>
      <option value="Sci-fi">Sci-fi</option>
      <option value="Crime">Crime</option>
      <option value="Drama">Drama</option>
      <option value="Mystery">Suspense</option>
      <option value="Terror">Terror</option>
    </select>
  </div>
);

Genre.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genre;
