import React from 'react';
import './sass/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import { NotFoundPage } from './Pages/NotFound.page';
import { MovieDetailsPage } from './Pages/MovieDetails.page';
import { HomePage } from './Pages/Home.page';

import reducers from './base.reducers'



function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={MovieDetailsPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
