import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from '../Admin/Admin';
import Flights from '../Flights';
import Tickets from '../Tickets/Tickets.js';

function ContentWindow() {
  return (
    <Switch>
      <Route path="/tickets">
        <Tickets />
      </Route>
      <Route path="/flights">
        <Flights />
      </Route>
      <Route path="/admin">
        <Admin></Admin>
      </Route>
    </Switch>
  );
}

export default ContentWindow;

function Home() {
  return <h2>Home</h2>;
}
