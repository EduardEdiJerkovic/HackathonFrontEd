import axios, { AxiosResponse } from 'axios';

import Configuration from '../config/Configuration';
import { TOKEN } from '../constants/local-storage';
import { ContentTypeEnum, createHeader } from './utils.service';

const URL = "security/oauth2/token";

interface GetTokenParams {
  grant_type: string;
  client_id: string;
  client_secret: string;
}

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
  const params: GetTokenParams = {
    grant_type: "client_credentials",
    client_id: Configuration.PUBLIC_KEY,
    client_secret: Configuration.PRIVATE_KEY,
  };
  const result = await axios
    .get(Configuration.SERVER_URL + URL, {
      headers: createHeader(ContentTypeEnum.XFORM),
      params,
    })
    .catch((error) => {
      throw error;
    });

  return result;
};

const fetchOrResetToken = async () => {
  const result = await getToken();
  localStorage.setItem(TOKEN, result.data.access_token);
};

const TokenService = { fetchOrResetToken };

export default TokenService;
