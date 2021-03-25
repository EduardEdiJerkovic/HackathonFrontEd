import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { createHeader } from './utils.service';

interface GetDelayPredictionParams {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  carrierCode: string;
  flightNumber: string;
  duration: string;
}

interface Delay {
  id: string;
  probability: string;
  result: string;
  subType: string;
  type: string;
}

interface FlightDelayResult {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: Delay[];
}

const URL = "travel/predictions/flight-delay";

/**
 * Get all flight schedule.
 * @param params
 * @returns
 */
const getFlightDelays = async (
  params: GetDelayPredictionParams
): Promise<AxiosResponse<FlightDelayResult>> => {
  const result = await axios.get<FlightDelayResult>(
    Configuration.SERVER_URL + URL,
    {
      headers: createHeader(),
      params,
    }
  );

  return result;
};