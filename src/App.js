import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import { MovieList, NotFound, MovieDetails, NewMovie, EditMovie } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/:error" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
