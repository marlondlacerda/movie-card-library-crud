/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const TEN = 10;

const Year = ({ value, onChange }) => {
  const inc = () => {
    if (value === TEN) return;

    const target = {
      name: 'year',
      value: value + 1,
    };

    onChange({ target });
  };

  const dec = () => {
    if (value === 0) return;

    const target = {
      name: 'year',
      value: value - 1,
    };

    onChange({ target });
  };

  return (
    <div className="new-input-year">
      <label htmlFor="year">
        Ano
      </label>
      <div className="new-container-input new-container-year">
        <span
          role="button"
          className="prev"
          tabIndex="0"
          onClick={ () => dec() }
          onKeyDown={ () => dec() }
        />
        <input
          type="number"
          name="year"
          className="new-year-input"
          id="year"
          value={ value }
          onChange={ onChange }
          placeholder="Digite o nome do Filme!"
          min="1900"
          max="2099"
          readOnly
        />
        <span
          role="button"
          className="next"
          name="year"
          tabIndex="0"
          onClick={ () => inc() }
          onKeyDown={ () => inc() }
        />
      </div>
    </div>
  );
};

Year.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Year;
