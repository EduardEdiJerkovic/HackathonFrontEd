import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import BuyForm from './BuyForm';
import ReservateForm from './ReservateForm';

function Tickets() {
  return (
    <Switch>
      <Route exact path="/tickets/reservate">
        <ReservateForm />
      </Route>
      <Route exact path="/tickets/buy">
        <BuyForm></BuyForm>
      </Route>
    </Switch>
  );
}

export default Tickets;
