import { API_URL } from "@env";
import axios from "axios";

const BASE_URL = API_URL;
/** getMenu */
export async function getMenu() {
  const request = await axios.get(`${BASE_URL}/api/menu`);
  return request.data;
}
