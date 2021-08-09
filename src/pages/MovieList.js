import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({ movies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    const addCard = <Link to="/movies/new">ADICIONAR CARTÃO</Link>;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
        {loading ? <Loading /> : addCard}
      </div>
    );
  }
}

export default MovieList;
