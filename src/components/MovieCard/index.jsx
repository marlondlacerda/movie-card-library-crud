import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section className="movie-card">
        <div className="movie-card-body" data-testid="movie-card">
          <img src={ imagePath } alt="Movie Cover" className="movie-card-image" />
          <div className="movie-card-header">
            <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
            <div className="movie-card-rating">
              <Rating rating={ rating } />
            </div>
          </div>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
