import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, id } = movie;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <Link to={ `/movies/${id}` } data-testid="movie-card">
            <img src={ imagePath } alt="Movie Cover" className="movie-card-image" />
            <div className="movie-card-header">
              <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
              <Rating rating={ rating } />
            </div>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
          </Link>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
