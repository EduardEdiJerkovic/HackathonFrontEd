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
