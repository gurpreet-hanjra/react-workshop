import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from '../App';
import routeA from '../RouteA';
import routeB from '../RouteB';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='/routeA' component={routeA} />
    <Route path='/routeB' component={routeB} />
  </Router>
)

export default routes;
