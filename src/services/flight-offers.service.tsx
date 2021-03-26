import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { createHeader } from './utils.service';

interface GetFlightOffersParams {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  adults: number;
  operationalSuffix?: string;
}

interface FlightOffer {
  type: string,
  id: string,
  source: string,
  instantTicketingRequired: false,
  nonHomogeneous: false,
  oneWay: false,
  lastTicketingDate: string,
  numberOfBookableSeats: number,
  itineraries: [],
  price: {
    currency: string,
    total: number,
    grandTotal: number
  }
}

interface FlightOfferResult {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: FlightOffer[];
}

const URL = "schedule/flights";

/**
 * Get all flight schedule.
 * @param params
 * @returns
 */
const getFlightOffers = async (
  params: GetFlightOffersParams
): Promise<AxiosResponse<FlightOfferResult>> => {
  const result = await axios.get<FlightOfferResult>(
    Configuration.SERVER_URL + URL,
    {
      headers: createHeader(),
      params,
    }
  );

  return result;
};

const FlightOffersService = { getFlightOffers };

export default FlightOffersService;