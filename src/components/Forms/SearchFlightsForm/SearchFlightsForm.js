import React, { Component } from 'react';

import LocationSearchInput from '../../Shared/LocationInput/LocationSearchInput';


class SearchRouteForm extends Component {
  render() {

    const { handleLocation, handlePickupLocation,
      handleRange,
      handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form className="search-flights medium" onSubmit={handleSubmit}>
          <div className="container-login100-form-btn">
            <button type='submit' className="login100-form-btn">
              Search
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchRouteForm;