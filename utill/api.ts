import { API_URL } from "@env";
import axios from "axios";
import { OrderData } from "../types/api";
import { BasketData } from "../types/data";

const BASE_URL = API_URL;
/** getMenu */
export async function getMenu() {
  const request = await axios.get(`${BASE_URL}/api/menu`);
  return request.data;
}

/** Order */
export async function Order(data: OrderData) {
  const request = await axios.post(`${BASE_URL}/api/order`, data);
  return request.data;
}
