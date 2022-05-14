import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './MovieLibrary.css';

import { FeaturedMovie, Footer, Header, Loading,
  MovieList, SearchBar } from '../../components';
import * as movieAPI from '../../services/movieAPI';

const MovieLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [bookMarkedOnly, setBookMarkedOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (movies.length === 0) {
      movieAPI.getMovies().then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setMovies(data);
        setIndex(randomIndex);
        setLoading(false);
      });
    }
  }, [movies]);

  const onChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    switch (target.name) {
    case 'searchText':
      setSearchText(value);
      break;
    case 'bookMarkedOnly':
      setBookMarkedOnly(value);
      break;
    case 'selectedGenre':
      setSelectedGenre(value);
      break;
    default:
      break;
    }
  };

  const routeChange = () => {
    history.push('movies/new');
  };

  return (
    <div>
      {
        loading ? <Loading /> : (
          <>
            <Header />
            <FeaturedMovie movie={ movies[index] } />
            <div className="lists">
              <SearchBar
                searchText={ searchText }
                onSearchTextChange={ onChange }
                bookMarkedOnly={ bookMarkedOnly }
                onBookMarkedChange={ onChange }
                selectedGenre={ selectedGenre }
                onSelectedGenreChange={ onChange }
              />
              <MovieList
                movies={ Object.values(movies)
                  .filter((movie) => (bookMarkedOnly === false
                    ? movie : movie.bookmarked === bookMarkedOnly))
                  .filter((movie) => (selectedGenre === ''
                    ? movie : movie.genres.includes(selectedGenre)))
                  .filter((movie) => movie.title.includes(searchText)
                  || movie.subtitle.includes(searchText)
                  || movie.storyline.includes(searchText)) }
              />
            </div>
            <div className="button-container">
              <button
                type="button"
                onClick={ routeChange }
              >
                <span />
                <span />
                <span />
                <span />
                ADICIONAR NOVO FILME
              </button>
            </div>
            <Footer />
          </>
        )
      }
    </div>
  );
};

export default MovieLibrary;
