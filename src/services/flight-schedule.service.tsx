import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { createHeader } from './utils.service';

interface GetFlightScheduleParams {
  carrierCode: string;
  flightNumber: string;
  scheduledDepartureDate: string;
  operationalSuffix?: string;
}

interface Timing {
  qualifier: string;
  value: string;
}

interface FlightPoint {
  iataCode: string;
  departure: {
    timings: Timing[];
  };
}

interface FlightSegment {
  boardPointIataCode: string;
  offPointIataCode: string;
  scheduledSegmentDuration: string;
}

interface FlightLeg {
  boardPointIataCode: string;
  offPointIataCode: string;
  aircraftEquipment: {
    aircraftType: string;
  };
  scheduledLegDuration: string;
}

interface FlightSchedule {
  type: string;
  scheduledDepartureDate: string;
  flightDesignator: {
    carrierCode: string;
    flightNumber: number;
  };
  flightPoints: FlightPoint[];
  segments: FlightSegment[];
  legs: FlightLeg[];
}

interface FlightScheduleResult {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: FlightSchedule[];
}

const URL = "schedule/flights";

/**
 * Get all flight schedule.
 * @param params
 * @returns
 */
const getFlightSchedule = async (
  params: GetFlightScheduleParams
): Promise<AxiosResponse<FlightScheduleResult>> => {
  const result = await axios.get<FlightScheduleResult>(
    Configuration.SERVER_URL + URL,
    {
      headers: createHeader(),
      params,
    }
  );

  return result;
};

const FlightScheduleService = { getFlightSchedule };

export default FlightScheduleService;
