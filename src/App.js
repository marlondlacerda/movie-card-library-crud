import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieLibrary, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieLibrary } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id">
          {(RouterProps) => <MovieDetails { ...RouterProps } />}
        </Route>
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
