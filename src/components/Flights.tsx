import React, { useEffect, useState } from 'react';

import FlightDestinationService, { FlightData } from '../services/flight-destination.service';

const Flights = (props: any) => {
  const [flight, setFlight] = useState<FlightData>([]);

  useEffect(():void | any => {
    FlightDestinationService.getFlightDestinations()
      .then(result => {
          setFlight(result.data.data)
      })
  }, [])

  return (
  <div className="wrapper">
     <h1>Flight List</h1>
     <ul>
       {flight.map(location => <li key={location.location}>{location.location}</li>)}
     </ul>
   </div>
  )
};

export default Flights;

/**

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
     <h1>My Grocery List</h1>
     <ul>
       {list.map(item => <li key={item.item}>{item.item}</li>)}
     </ul>
   </div>
  )
}

export default App;

*/

