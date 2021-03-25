import React, { useState }  from 'react';
import Button from '../../shared/Button/Button';

import CustomSelect from '../../shared/Select';
import airportOptions from '../../../constants/airports';
import statuses from '../../../constants/status';

const SearchFlightsForm = (props) => {
    const [airport, setAirport] = useState(null);
    const [status, setStatus] = useState(null);
    const { handleSubmit } = props;

    function formSubmit() {
      console.log(airport);
    }

    return (
      <React.Fragment>
        <form onSubmit={(e) => {e.preventDefault(); formSubmit()}}>
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
          <CustomSelect
            options={statuses}
            isSearchable
            isClearable
            placeholder="Select flight status"
            marginBottom="16px"
            onChange={(value) => {
              setStatus(value.value);
            }}
          />
          <Button type="submit">Search</Button>
        </form>
      </React.Fragment>
    );
}

export default SearchFlightsForm;