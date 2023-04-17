import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

/**
 * Request to get products in the database.
 * @param {string} endpoint 
 * @param {{category: string, website: string}} body 
 */
export const requestGet = async (endpoint, body) => instance.get(endpoint, body);

export default instance;