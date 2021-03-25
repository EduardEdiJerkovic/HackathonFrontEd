import React, { Component } from 'react';

import LocationSearchInput from '../../Shared/LocationInput/LocationSearchInput';


class SearchRouteForm extends Component {
  render() {

    const { handleLocation, handlePickupLocation,
      handleRange,
      handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form className="routes-form medium" onSubmit={handleSubmit}>
          <LocationSearchInput selectLocation={handleLocation}
          placeholder="" labelContent="What is your location" inputClassName="border-black" />
          <LocationSearchInput selectLocation={handlePickupLocation}
          placeholder="" labelContent="Location of pickup" inputClassName="border-black" />
          <div className="checkboxes-wrapper" onChange={handleRange}>
            <label class="container-checkboxes">Close
              <input type="radio"  className="checkboxes" value="close" name="range" />
              <span class="checkmark"></span>
            </label>

            <label class="container-checkboxes">Medium
              <input type="radio"  className="checkboxes" value="medium" name="range" />
              <span class="checkmark"></span>
            </label>

            <label class="container-checkboxes">Far
              <input type="radio" className="checkboxes" value="far" name="range" />
              <span class="checkmark"></span>
            </label>
          </div>


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