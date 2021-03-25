import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { createHeader } from './utils.service';

interface Segment {
  departure: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  carrierCode: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  duration: string;
  id: string;
  numberOfStops: number;
}

interface Fee {
  amount: string;
  type: string;
}

interface Tax {
  amount: string;
  code: string;
}

interface Price {
  currency: string;
  total: string;
  base: string;
  fees?: Fee[];

  texes?: Tax[];
  grandTotal?: string;
  billingCurrency?: string;
}

interface FareDetailsBySegment {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  brandedFare: string;
  class: string;
  includedCheckedBags: {
    quantity: number;
  };
}

interface TravelPricing {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: Price;
  fareDetailsBySegment: FareDetailsBySegment[];
}

interface FlightOffer {
  type: string;
  id: string;
  source?: string;
  instantTicketingRequired?: boolean;
  nonHomogeneous?: boolean;
  paymentCardRequired?: boolean;
  lastTicketingDate?: string;
  itineraries?: {
    duration: string;
    segments: Segment[];
  }[];
  price?: Price;
  pricingOptions?: {
    fareType: string[];
    includedCheckedBagsOnly: boolean;
  };
  validatingAirlineCodes?: string[];
  travelPricings?: TravelPricing[];
}

interface Phone {
  deviceType: string;
  countryCallingCode: string;
  number: string;
}

interface Document {
  documentType: string;
  birthPlace: string;
  issuanceLocation: string;
  issuanceDate: string;
  number: string;
  expiryDate: string;
  issuanceCountry: string;
  validityCountry: string;
  nationality: string;
  holder: boolean;
}

interface Name {
  firstName: string;
  lastName: string;
}

interface Traveler {
  id: string;
  dateOfBirth: string;
  name: Name;
  // gender: string;
  contact: {
    emailAddress: string;
    phones: Phone[];
  };
  documents: Document[];
}

interface TicketAgreement {
  option: string;
  delay: string;
}

interface Contact {
  addresseeName: Name;
  companyName: string;
  purpose: string;
  phones: Phone[];
  emailAddress: string;
  address: {
    lines: string[];
    postalCode: string;
    cityName: string;
    countryCode: string;
  };
}

interface Location {
  cityCode: string;
  countryCode: string;
}

interface AssociateRrecord {
  reference: string;
  creationDateTime: string;
  originSystemCode: string;
  flightOfferId: string;
}

interface FlightBooking {
  description: string;
  type: string;
  id?: string;
  queuingOfficeId?: string;
  associatedRecords?: AssociateRrecord[];

  travelers?: Traveler[];
  flightOffers: FlightOffer[];
  ticketingAgreement?: TicketAgreement;
  contacts?: Contact[];
}

/**
 * Book flight.
 * @param params
 * @returns
 */
const bookFlight = async (data: FlightBooking): Promise<AxiosResponse<any>> => {
  const result = await axios.post(Configuration.SERVER_URL + URL, data, {
    headers: createHeader(),
  });

  return result;
};

const FlightDestinationService = { bookFlight };

export default FlightDestinationService;
