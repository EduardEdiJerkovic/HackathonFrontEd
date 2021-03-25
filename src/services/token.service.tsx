import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { TOKEN } from '../constants/local-storage';
import { createHeaderForToken } from './utils.service';

const URL = "security/oauth2/token";

interface GetTokenResult {
  type: string;
  username: string;
  application_name: string;
  client_id: string;
  token_type: string;
  access_token: string;
  expires_in: number;
  state: string;
  scope: string;
}

const getToken = async (): Promise<AxiosResponse<GetTokenResult>> => {
  const body: string = `grant_type=client_credentials&client_id=${Configuration.PUBLIC_KEY}&client_secret=${Configuration.PRIVATE_KEY}`;
  const result = await axios.post(Configuration.SERVER_URL + URL, body, {
    headers: createHeaderForToken(),
  });

  return result;
};

const fetchOrResetToken = async () => {
  const result = await getToken();
  localStorage.setItem(TOKEN, result.data.access_token);
};

const TokenService = { fetchOrResetToken };

export default TokenService;
