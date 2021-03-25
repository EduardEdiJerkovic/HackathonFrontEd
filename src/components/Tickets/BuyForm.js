import React, { useState } from 'react';
import injectSheet from 'react-jss';

import airportOptions from '../../constants/airports';
import Button from '../shared/Button/Button';
import Input from '../shared/Input';
import CustomSelect from '../shared/Select';
import styles from './BuyForm.styles';


const ReservateForm = (props) => {
  const [departureAirport, setDepartureAirport] = useState(null);
  const [destinationAirport, setDestinationAirport] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const { handleSubmit, classes } = props;

  function formSubmit() {
    handleSubmit(departureAirport, destinationAirport, departureDate);
  }

    return (
      <React.Fragment>
        <form  className={classes.form} onSubmit={(e) => {e.preventDefault(); formSubmit()}}>
          <CustomSelect
            options={Object.keys(airportOptions).map(
              airport => { return { value: airport, label: airportOptions[airport]['name']}})
            }
            isSearchable
            isClearable
            placeholder="Select departure airport"
            marginBottom="16px"
            onChange={(value) => {
              setDepartureAirport(value.value);
            }}
          /><CustomSelect
          options={Object.keys(airportOptions).map(
            airport => { return { value: airport, label: airportOptions[airport]['name']}})
          }
          isSearchable
          isClearable
          placeholder="Select destination airport"
          marginBottom="16px"
          onChange={(value) => {
            setDestinationAirport(value.value);
          }}
          />
          <Input
            name={'departureDate'}
            type='date'
            placeholder={departureDate}
            borderRadius="3px"
            onChange={(event) => {
              setDepartureDate(event.target.value)
            }}
            // value={flightNumber}
            // marginBottom={16}
          />
          <Button type="submit">Search</Button>
        </form>
      </React.Fragment>
    );
  
}


export default injectSheet(styles)(ReservateForm);
