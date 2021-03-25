import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import { TOKEN } from '../../constants/local-storage';
import TokenService from '../../services/token.service';

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
  TokenService.fetchOrResetToken();
  console.log("----token", localStorage.getItem(TOKEN));
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
