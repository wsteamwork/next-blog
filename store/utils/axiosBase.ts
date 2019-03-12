export type AxiosRequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
import axiosBase from 'axios';

const DOMAIN       = process.env.API_URL;
const CUSTOMER_URL = DOMAIN + 'customer-api/';

const headers = {
  Accept: 'application/json',
  'Content-Language': 'en-EN',
};

export const axios = axiosBase.create({
  baseURL: CUSTOMER_URL,
  headers,
});
