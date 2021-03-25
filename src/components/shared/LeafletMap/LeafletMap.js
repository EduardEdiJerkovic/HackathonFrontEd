import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import './map.css';

class LeafletMap extends Component {

  constructor(props) {
    super(props);
    this.map = React.createRef();

    this.state = {
      defaultCenter: ['45.8150', '15.9819']
    }
  }

  saveMap = (ref) =>
  { this.map = ref;
    if(this.props.setMap) {
      this.props.setMap(ref);
    }
  }



  render() {

    const { location } = this.props;
    const { defaultCenter } = this.state;
    let center;

    if(location) {
      center = [ Number( location.lat ), Number( location.lng ) ]
    } else {
      center = defaultCenter
    }

    return (
      <React.Fragment>
          <div className='map-wrapper'>
          <MapContainer center={center} zoom={ 14 } ref={() => this.saveMap}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default LeafletMap;