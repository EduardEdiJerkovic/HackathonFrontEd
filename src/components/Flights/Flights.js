import React, { Fragment, useState } from 'react';
import injectSheet from 'react-jss';
import LeafletMap from '../shared/LeafletMap/LeafletMap';
import Spinner from '../shared/Spinner';

import styles from './Flights.styles';
import SearchFlightsForm from '../Forms/SearchFlightsForm/SearchFlightsForm';

function Flights(props) {
  const [flights, setFlights] = useState([1]);
  let map = React.createRef();
  const { classes } = props;

  function setMap(ref) {
    map = ref
    this.setState({isMapInit: true})
  }

  return <Fragment>
    <h3 className={classes.pageTitle}>Flights</h3>
    <div className={classes.pageContent}>
      <div className={classes.flightsList}>
        <SearchFlightsForm />
        {flights.length ? flights.map((flight, index) => {
          return <div>Flight {index}</div>
        }) : <Spinner />}
      </div>
      <LeafletMap setMap={setMap}></LeafletMap>
    </div>
  </Fragment>
}

export default injectSheet(styles)(Flights);