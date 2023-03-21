import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import { IOrderData } from '../types/api';

const BASE_URL = API_URL;
/** getMenu */
export async function getMenu() {
  console.log(API_URL);
  console.log(BASE_URL);
  const request = await axios.get(`${BASE_URL}/api/menu`);
  return request.data;
}

/** Order */
export async function Order(data: IOrderData) {
  const request = await axios.post(`${BASE_URL}/api/order`, data);
  return request.data;
}
