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
import { ActorDetailsPage } from './Pages/ActorDetails.page'
import { HomePage } from './Pages/Home.page';
import { MoreViewPage } from './Pages/MoreView.page';

import reducers from './base.reducers'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={MovieDetailsPage} />
        <Route path="/actors/:id" component={ActorDetailsPage} />
        <Route path="/more" component={MoreViewPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
      <div className="footer"> Copyright © 2020-2021 Movie Stacker All Rights Reserved </div>
    </Router>
  );
}

export default App;
