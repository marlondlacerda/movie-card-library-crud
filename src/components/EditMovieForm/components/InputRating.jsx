/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const TEN = 10;
const ZEROFIVE = 0.5;

const InputRating = ({ value, onChange }) => {
  const inc = () => {
    if (value === TEN) return;

    const target = {
      name: 'rating',
      value: value + ZEROFIVE,
    };

    onChange({ target });
  };

  const dec = () => {
    if (value === 0) return;

    const target = {
      name: 'rating',
      value: value - ZEROFIVE,
    };

    onChange({ target });
  };

  return (
    <div className="edit-input-rating">
      <label htmlFor="rating">
        Avaliação
      </label>
      <div className="edit-container-input">
        <span
          role="button"
          className="prev"
          tabIndex="0"
          onClick={ () => dec() }
          onKeyDown={ () => dec() }
        />
        <input
          type="number"
          name="rating"
          className="edit-rating-input"
          id="rating"
          value={ value }
          onChange={ onChange }
          placeholder="Digite o nome do Filme!"
          min="0"
          max="10"
          readOnly
        />
        <span
          role="button"
          className="next"
          name="rating"
          tabIndex="0"
          onClick={ () => inc() }
          onKeyDown={ () => inc() }
        />
      </div>
    </div>
  );
};

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
