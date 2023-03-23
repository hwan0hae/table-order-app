import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import { IAppSignInData, IOrderData } from '../types/api';

/** signIn */
export async function signIn(data: IAppSignInData) {
  const request = await axios.post(`${API_URL}/user/signin`, data);
  return request.data;
}
/** getMenu */
export async function getMenu() {
  const request = await axios.get(`${API_URL}/menu/list`);
  return request.data;
}

/** Order */
export async function Order(data: IOrderData) {
  const request = await axios.post(`${API_URL}/order/request`, data);
  return request.data;
}
