import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import notFound from './notfound.png';
import './NotFound.css';

const NotFound = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <img src={ notFound } alt="notfound" />
        <h1 className="notfound-404">
          4
          <span>0</span>
          4
        </h1>
        <h2 className="notfound-text">page not found</h2>
        <div className="button-container">
          <button
            type="button"
            onClick={ () => setShouldRedirect(true) }
          >
            <span />
            <span />
            <span />
            <span />
            go home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
