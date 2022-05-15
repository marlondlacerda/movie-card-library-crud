import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const MovieDetails = () => {
  const id = parseInt(window.location.pathname.split('/')[2], 10);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (Object.keys(movie).length === 0) {
      setLoading(true);
      (async () => {
        const data = await movieAPI.getMovie(id);

        if (!data) return setShouldRedirect(true);

        const { imagePath } = data;

        data.imagePath = imagePath.includes('images/') ? `../${imagePath}` : imagePath;
        setMovie(data);
        setLoading(false);
      })();
    }
  }, [id, movie]);

  const { title, storyline, imagePath, genres, rating, subtitle } = movie;
  const { deleteMovie } = movieAPI;

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (loading ? <Loading /> : (
    <>
      <img src={ imagePath } alt="Movie Cover" className="movie-card-image" />
      <p>{ `Title: ${title}` }</p>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genres.join(', ')}` }</p>
      <p>{ `Rating: ${rating}` }</p>
      <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      <Link to="/" onClick={ () => deleteMovie(id) }>DELETAR</Link>
      <Link to="/">VOLTAR</Link>
    </>
  ));
};

export default MovieDetails;
