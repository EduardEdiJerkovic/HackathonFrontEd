import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Destinations from '../Destinations';

function Admin() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/destinations`}>
        <Destinations></Destinations>
      </Route>
    </Switch>
  );
}

export default Admin;