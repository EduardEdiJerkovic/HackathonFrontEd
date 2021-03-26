import React, { Fragment, useState } from 'react';
import injectSheet from 'react-jss';

import styles from './Destinations.styles';
import TokenService from '../../services/token.service';
import FlightDestinationService from '../../services/flight-destination.service';
import CustomSelect from '../shared/Select';
import airportOptions from '../../constants/airports';
import Input from '../shared/Input';
import Button from '../shared/Button/Button';
import Toast from '../../utils/toast';

export function DestinationList(props) {
    const { classes } = props;

    return (
      <div className={classes.destinationList}>
        <div className={classes.listHeader}>
            <span className={classes.itemHeader}>Destination Type</span>
            <span className={classes.itemHeader}>Destination</span>
            <span className={classes.itemHeader}>Number Of Flights</span>
            <span className={classes.itemHeader}>Number Of Travelers</span>
        </div>
        {props.data.map((destination) => {
          return <div className={classes.listItem}>
            <span className={classes.itemValue}>{destination.type}</span>
            <span className={classes.itemValue}>{destination.destination}</span>
            <span className={classes.itemValue}>{destination.analytics.flights.score}</span>
            <span className={classes.itemValue}>{destination.analytics.travelers.score}</span>
          </div>
        })}
      </div>
    );
}

function Destinations(props) {

  const { classes } = props;

  const [city, setCity] = useState(null);
  const [period, setPeriod] = useState(null);
  const [destinations, setDestinations] = useState([]);

  function searchDestinations() {
    TokenService.fetchOrResetToken();
    if(city && period) {
      Toast.triggerSuccess("Searching for destinations");
      FlightDestinationService.mostPopularDestinations({originCityCode: city, period: period.slice(0,7), max: 50}).then(data => {
        setDestinations(data.data.data);
      })
    } else {
      Toast.triggerError("Please enter both values!");
    }
  }

  function handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);
    searchDestinations(offset);
  };

  return <Fragment>
    <h3 className={classes.pageTitle}>Destinations</h3>
    <div className={classes.pageContent}>
      <form  className={classes.form} onSubmit={(e) => {e.preventDefault(); searchDestinations()}}>
        <div className={classes.inputs}>
          <CustomSelect
            options={Object.keys(airportOptions).map(
              airport => { return { value: airport, label: airportOptions[airport]['city']}})
            }
            isSearchable
            isClearable
            placeholder="Select city"
            marginBottom="16px"
            onChange={(value) => {
              if(value) {
                setCity(value.value);
              } else {
                setCity('')
              }
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
        </div>
        <Button type="submit">Search</Button>
      </form>
      {destinations.length ? <DestinationList data={destinations} {...props}></DestinationList> : <div>There is no data!</div>}
    </div>
  </Fragment>
}

export default injectSheet(styles)(Destinations);