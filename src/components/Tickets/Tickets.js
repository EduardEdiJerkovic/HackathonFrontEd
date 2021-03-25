import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import BuyForm from './BuyForm';
import ReservateForm from './ReservateForm';

function Tickets() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      {console.log("path", path)}
      <Route path={`${path}/reservate`}>
        <ReservateForm />
      </Route>
      <Route path={`${path}/buy`}>
        <BuyForm></BuyForm>
      </Route>
    </Switch>
  );
}

export default Tickets;
