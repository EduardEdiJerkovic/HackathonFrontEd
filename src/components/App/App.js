import React from 'react';
import injectSheet from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ContentWindow from '../ContentWindow';
import MainSidebar from '../Sidebar';
import styles from './App.styles';

function App(props) {
  const { classes } = props;

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        pauseOnHover
      />
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
