import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import BuyForm from './BuyForm';
import ReservateForm from './ReservateForm';

function Tickets() {
  return (
    <Switch>
      <Route path="/reservate">
        <ReservateForm></ReservateForm>
      </Route>
      <Route path="/buy">
          <BuyForm></BuyForm>
      </Route>
    </Switch>
  );
}



export default Tickets;
