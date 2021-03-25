import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { createHeader } from './utils.service';

/**
 * Params for flight destination.
 */
interface GetFlightDestinationParams {
  origin?: string;
  maxPrice?: number;
}

export interface FlightData {
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

const URL = "shopping/flight-destinations";

/**
 * Get all flight destinations.
 * @param params
 * @returns
 */
const getFlightDestinations = async (
  params?: GetFlightDestinationParams
): Promise<AxiosResponse<FlightDataResult>> => {
  const result = await axios.get(Configuration.SERVER_URL + URL, {
    headers: createHeader(),
    params,
  });

  return result;
};

const FlightDestinationService = { getFlightDestinations };

export default FlightDestinationService;
