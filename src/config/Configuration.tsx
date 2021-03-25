const Configuration = {
  API_HOSTNAME: process.env.REACT_APP_API_HOSTNAME || "",
  SERVER_URL: process.env.REACT_APP_URL_SERVER || "",
  PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY || "",
  PRIVATE_KEY: process.env.REACT_APP_PRIVATE_KEY || "",
  NODE_ENV: process.env.REACT_APP_NODE_ENV || "",
};

/**
 * Configuration file with env variables.
 *
 */
export default Configuration;
