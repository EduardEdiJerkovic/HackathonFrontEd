import React, { Fragment, useState } from 'react';
import injectSheet from 'react-jss';
import LeafletMap from '../shared/LeafletMap/LeafletMap';
import Spinner from '../shared/Spinner';

import styles from './Flights.styles';
import SearchFlightsForm from '../Forms/SearchFlightsForm';
import TokenService from '../../services/token.service';
import FlightScheduleService from '../../services/flight-schedule.service';

function Flights(props) {
  let map = React.createRef();
  const { classes } = props;

  function setMap(ref) {
    map = ref
    this.setState({isMapInit: true})
  }

  function searchFlights(airport, status) {
    TokenService.fetchOrResetToken();
    FlightScheduleService.getFlightSchedule({origin: airport}).then(data => {
      console.log(data);
    })
  }

  return <Fragment>
    <h3 className={classes.pageTitle}>Flights</h3>
    <div className={classes.pageContent}>
      <div className={classes.flightsList}>
        <SearchFlightsForm handleSubmit={(airport, status) => searchFlights(airport, status)} />
      </div>
      <LeafletMap setMap={setMap}></LeafletMap>
    </div>
  </Fragment>
}

export default injectSheet(styles)(Flights);