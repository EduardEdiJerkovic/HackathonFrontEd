import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
=======
import Admin from '../Admin/Admin';
>>>>>>> d6d46ffc093746daefb1028ae8505e1c037a0e28

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
