import React, { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import './MovieList.css';

const WIDTHLENGHT = 350;
const SIXTY = 60;
const INITIALSTATUS = 150;
const MINLENGTH = 760;
const FOUR = 4;

const handleLeftArrow = (scrollX, setScrollX) => {
  let x = scrollX + Math.round(window.innerWidth / 2);
  if (x > 0) x = 0;
  setScrollX(x);
};

const handleRightArrow = (scrollX, setScrollX, movies) => {
  let x = scrollX - Math.round(window.innerWidth / 2);
  const list = movies.length * WIDTHLENGHT;

  if ((window.innerWidth - list) > x) {
    x = (window.innerWidth - list) - SIXTY;
  }
  setScrollX(x);
};

const MovieList = ({ movies }) => {
  const [scrollX, setScrollX] = useState(-INITIALSTATUS);

  useEffect(() => {
    if (movies.length <= FOUR && window.innerWidth > MINLENGTH) {
      setScrollX(0);
    } else if (scrollX === 0) {
      setScrollX(-INITIALSTATUS);
    }
  }, [movies, scrollX]);

  return (
    <div className="movieRow">
      <h2>Lançamentos</h2>
      <button
        type="button"
        className="movieRow-left"
        onClick={ () => handleLeftArrow(scrollX, setScrollX) }
      >
        <NavigateBeforeIcon style={ { fontSize: 50 } } />
      </button>

      <button
        type="button"
        className="movieRow-right"
        onClick={ () => handleRightArrow(scrollX, setScrollX, movies) }
      >
        <NavigateNextIcon style={ { fontSize: 50 } } />
      </button>
      <div className="movieRow-listarea">
        <main
          className="movie-list"
          style={ {
            marginLeft: scrollX,
            width: movies.length * window.innerWidth,
          } }
        >
          {
            movies.map((filme) => <MovieCard key={ filme.title } movie={ filme } />)
          }
        </main>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default MovieList;
