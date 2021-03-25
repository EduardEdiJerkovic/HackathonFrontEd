import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import Flights from '../Flights';

function ContentWindow() {
  return (
    <Switch>
      <Route path="/tickets">
        <About />
      </Route>
      <Route path="/flights">
        <Flights></Flights>
      </Route>
      <Route path="/admin">
        <Home />
      </Route>
    </Switch>
  );
}

export default ContentWindow;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
