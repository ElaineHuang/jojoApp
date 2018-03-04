import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { history } from 'store';
import PATHS from 'constants/paths';
import MainContainer from 'containers/MainContainer';
import HomeContainer from 'containers/HomeContainer';
import AboutContainer from 'containers/AboutContainer';

export default (
  <Router history={history}>
    <Route component={MainContainer} path={PATHS.ROOT} >
      <IndexRoute component={HomeContainer} />
      <Route path={PATHS.ABOUT} component={AboutContainer} />
    </Route>
  </Router>
);
