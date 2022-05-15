/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const ImagePath = ({ value, onChange }) => (
  <div className="new-title-box">
    <input
      type="text"
      name="imagePath"
      value={ value }
      onChange={ onChange }
      placeholder=""
      onFocus={ (e) => { e.target.placeholder = 'Digite a url da Imagem!'; } }
      onBlur={ (e) => { e.target.placeholder = ''; } }
      required
    />
    <label htmlFor="imagePath">
      Imagem
    </label>
  </div>
);

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
