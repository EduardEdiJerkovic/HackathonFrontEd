import React from 'react';
import injectSheet from 'react-jss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContentWindow from '../ContentWindow';

import MainSidebar from '../Sidebar';
import styles from './App.styles';

function App(props) {
  const { classes } = props;

  return (
    <Router>
      <div className={classes.content}>
        <MainSidebar />
        <div className={classes.page}>
          <ContentWindow />
        </div>
      </div>
    </Router>
  );
}

export default injectSheet(styles)(App);

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
