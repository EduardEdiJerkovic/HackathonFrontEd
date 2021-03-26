import React, { Fragment, useState } from 'react';
import injectSheet from 'react-jss';
import { Route, Switch, useRouteMatch } from 'react-router';

import BuyForm from '../Forms/SearchTickets/BuyForm';
import ReservateForm from '../Forms/SearchTickets/ReservateForm';
import styles from './Ticketsstyles';

function Tickets(props) {
  let { path } = useRouteMatch();

  const { classes } = props;

  
  return (
    <Fragment>
      <h3 className={classes.pageTitle}>Flights</h3>
    <Switch>
      {console.log("path", path)}
      <Route path={`${path}/reservate`}>
        <ReservateForm />
      </Route>
      <Route path={`${path}/buy`}>
        <BuyForm></BuyForm>
      </Route>
    </Switch>
    </Fragment>
);

  // function handleReservationSubmit () {

  //   TokenService.fetchOrResetToken();
  //     FlightScheduleService.getFlightDestination({origin: airport}).then(data => {
  //       console.log(data);
  //     })
  // }

}

export default injectSheet(styles)(Tickets);
