/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Duration = ({ value, onChange }) => (
  <div className="edit-title-box">
    <input
      type="text"
      name="duration"
      value={ value }
      onChange={ onChange }
      placeholder=""
      onFocus={
        (e) => { e.target.placeholder = 'Digite a duração do Filme "ex: 1h 15m"!'; }
      }
      onBlur={ (e) => { e.target.placeholder = ''; } }
      required
    />
    <label htmlFor="subtitle">
      Duração
    </label>
  </div>
);

Duration.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Duration;
