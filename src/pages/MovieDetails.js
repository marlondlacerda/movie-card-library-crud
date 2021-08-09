import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.mountDetail = this.mountDetail.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: false });
  }

  mountDetail(movie) {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { deleteMovie } = movieAPI;

    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p className="details-storyline">{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link className="link" to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link className="link" to="/" onClick={ () => deleteMovie(id) }>DELETAR</Link>
        <Link className="link" to="/">VOLTAR</Link>
      </>
    );
  }

  render() {
    const { loading, movie } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.mountDetail(movie)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
