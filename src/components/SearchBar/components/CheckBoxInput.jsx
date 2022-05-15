import React from 'react';
import PropTypes from 'prop-types';

import './CheckBoxInput.css';

const CheckBoxInputLabel = ({ bookMarkedOnly, onBookMarkedChange }) => (
  <label
    htmlFor="bookMarkedOnly"
    data-testid="checkbox-input-label"
    className="label-checkbox"
  >
    <input
      type="checkbox"
      data-testid="checkbox-input"
      name="bookMarkedOnly"
      checked={ bookMarkedOnly }
      onChange={ onBookMarkedChange }
      className="switch"
    />
    Mostrar somente favoritos
  </label>
);

CheckBoxInputLabel.propTypes = {
  bookMarkedOnly: PropTypes.bool.isRequired,
  onBookMarkedChange: PropTypes.func.isRequired,
};

export default CheckBoxInputLabel;
