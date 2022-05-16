import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
  <div className="movie-card-rating">
    <span className="rating">{rating}</span>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;
