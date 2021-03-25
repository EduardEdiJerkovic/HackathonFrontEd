import React from 'react';
import injectSheet from 'react-jss';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

function ContentWindow() {
  return (
    <Switch>
      <Route path="/tickets">
        <About />
      </Route>
      <Route path="/flights">
        <Users />
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