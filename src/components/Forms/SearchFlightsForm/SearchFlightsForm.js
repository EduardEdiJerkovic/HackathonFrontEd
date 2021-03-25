import React, { Component } from 'react';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input';

import LocationSearchInput from '../../Shared/LocationInput/LocationSearchInput';


class SearchRouteForm extends Component {
  render() {

    const { handleAirport,
      handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form className="search-flights medium" onSubmit={handleSubmit}>
          <Select
            customStyles={countrySelectStyles}
            options={countryList().getData()}
            placeholderId="RequestManual.country"
            errorClass={
              this.state.errors ? (this.state.errors['errorFields'].indexOf('country') > -1 ? true : null) : null
            }
            isSearchable
            isClearable
            backgroundColor={inputBackgroundColor}
            marginBottom="16px"
            onChange={(value) => {
              if (value === null) {
                this.setState({ country: '', stateInputDisabled: true, countryState: '' });
              } else {
                let stateInputDisabled = value.label !== 'United States';
                this.setState({ stateInputDisabled: stateInputDisabled, country: value.label });
              }
            }}
          />
          <Button></Button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchRouteForm;