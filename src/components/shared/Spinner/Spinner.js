import React from 'react';
import injectSheet from 'react-jss';

import styles from './Spinner.styles';

const Spinner = (props) => {
  const { classes } = props;

  return (
    <div className={classes.spinnerOverlay}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Spinner);
