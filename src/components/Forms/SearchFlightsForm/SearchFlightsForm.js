import React, { useState }  from 'react';
import Button from '../../shared/Button/Button';
import injectSheet from 'react-jss';

import CustomSelect from '../../shared/Select';
import airportOptions from '../../../constants/airports';
import styles from './SearchFlightsForm.styles'
import Input from '../../shared/Input';

const SearchFlightsForm = (props) => {
    const [airport, setAirport] = useState(null);
    const [flightNumber, setFlightNumber] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const { handleSubmit, classes } = props;

    function formSubmit() {
      console.log(airport);
      console.log(flightNumber);
      console.log(departureDate)
      handleSubmit({carrierCode: airport, flightNumber: flightNumber, scheduledDepartureDate: departureDate});
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
            placeholder="Select Airport"
            marginBottom="16px"
            onChange={(value) => {
              setAirport(value.value);
            }}
          />
          <Input
            name={'flightNumber'}
            type='text'
            placeholder={'Flight Number'}
            borderRadius="3px"
            onChange={(event) => {
              setFlightNumber(event.target.value)
            }}
            value={flightNumber}
            marginBottom={16}
          />
          <Input
            name={'departureDate'}
            type='date'
            placeholder={departureDate}
            borderRadius="3px"
            onChange={(event) => {
              setDepartureDate(event.target.value)
            }}
            value={flightNumber}
            marginBottom={16}
          />

          <Button type="submit">Search</Button>
        </form>
      </React.Fragment>
    );
}

export default injectSheet(styles)(SearchFlightsForm);