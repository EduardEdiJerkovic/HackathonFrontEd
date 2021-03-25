import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { createHeader } from './utils.service';


let URL = "shopping/flight-destinations";
/**
 * Params for flight destination.
 */
interface GetFlightDestinationParams {
  origin: string;
  period: string;
  max?: number;
}

interface FlightData {
  type: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  price: {
    total: string;
  };
  links: {
    flightDates: string;
    flightOffers: string;
  };
}

interface FlightDictionaries {
  currencies: string;
  locations: any;
}

interface FlightMeta {
  currency: string;
  links: {
    self: string;
  };
  defaults: {
    departureDate: string;
    oneWay: boolean;
    duration: string;
    nonStop: boolean;
    viewBy: string;
  };
}

interface FlightDataResult {
  data: FlightData[];
  dictionaries: FlightDictionaries;
  meta: FlightMeta;
}

/**
 * Get all flight destinations.
 * @param params
 * @returns
 */

 const getFlightDestinations = async (
  params: GetFlightDestinationParams
): Promise<AxiosResponse<FlightDataResult>> => {
  const result = await axios.get<FlightDataResult>(
    Configuration.SERVER_URL + URL,
    {
      headers: createHeader(),
      params,
    }
  );

  return result;
};

/**
 * Params for most popular destinations.
 */

interface GetPopularDestinationsParams {
  originCityCode: string;
  period: string;
}

interface PopularDestination {
  type: string;
  destination: string;
  subType: string;
  analytics: object;
}
interface FlightMostPopularDestinationsResult {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: PopularDestination[];
}

URL = 'travel/analytics/air-traffic/booked'

const mostPopularDestinations = async (
  params: GetPopularDestinationsParams
): Promise<AxiosResponse<FlightMostPopularDestinationsResult>> => {
  const result = await axios.get<FlightMostPopularDestinationsResult>(
    Configuration.SERVER_URL + URL,
    {
      headers: createHeader(),
      params,
    }
  );

  return result;
};

const FlightDestinationService = { getFlightDestinations, mostPopularDestinations };

export default FlightDestinationService;
