import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Settings from './components/account/Settings';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/settings" exact component={Settings} />
    <Route component={NotFound} />
  </Switch>
