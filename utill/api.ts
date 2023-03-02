import axios from "axios";

/** getMenu */
export async function getMenu() {
  const request = await axios.get("https://localhost:3000/api/menu/list");

  return request.data;
}
