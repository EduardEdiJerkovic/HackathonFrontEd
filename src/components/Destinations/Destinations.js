import React, { Fragment, useState } from 'react';
import injectSheet from 'react-jss';
import Spinner from '../shared/Spinner';

import styles from './Destinations.styles';
import TokenService from '../../services/token.service';
import FlightDestinationService from '../../services/flight-destination.service';
import CustomSelect from '../shared/Select';
import airportOptions from '../../constants/airports';
import Input from '../shared/Input';
import Button from '../shared/Button/Button';

function Flights(props) {
  const { classes } = props;

  const [city, setCity] = useState(null);
  const [period, setPeriod] = useState(null);

  function searchDestinations(airport, status) {
    TokenService.fetchOrResetToken();
    FlightDestinationService.mostPopularDestinations({origin: city, period: period.split(0,7)}).then(data => {
      console.log(data);
    })
  }

  return <Fragment>
    <h3 className={classes.pageTitle}>Flights</h3>
    <div className={classes.pageContent}>
      <form  className={classes.form} onSubmit={(e) => {e.preventDefault(); searchDestinations()}}>
        <CustomSelect
          options={Object.keys(airportOptions).map(
            airport => { return { value: airport, label: airportOptions[airport]['city']}})
          }
          isSearchable
          isClearable
          placeholder="Select city"
          marginBottom="16px"
          onChange={(value) => {
            setCity(value.value);
          }}
        />
        <Input
          name={'departureDate'}
          type='date'
          placeholder={period}
          borderRadius="3px"
          onChange={(event) => {
            setPeriod(event.target.value)
          }}
          value={period}
          marginBottom={16}
        />

        <Button type="submit">Search</Button>
      </form>
    </div>
  </Fragment>
}

export default injectSheet(styles)(Flights);