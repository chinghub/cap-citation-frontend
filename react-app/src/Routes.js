import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Settings from './components/account/Settings';
import Case from './components/cases/Case';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Case/:id" exact component={Case} />
    <Route path="/settings" exact component={Settings} />
    <Route component={NotFound} />
  </Switch>
