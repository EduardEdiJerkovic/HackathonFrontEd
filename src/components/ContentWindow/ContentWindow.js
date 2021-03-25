import React from 'react';
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
=======
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Admin from '../Admin/Admin';
>>>>>>> 96e92a8c7e1f2b71f44b86f262e93aa0f3ef035e

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
