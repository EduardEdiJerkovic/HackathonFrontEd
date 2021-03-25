import { TOKEN } from '../constants/local-storage';

/**
 * Creates header with token.
 */
export const createHeader = () => {
  const token = localStorage.getItem(TOKEN);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
