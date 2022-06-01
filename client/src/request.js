import axios from "axios";
// const API_URL = "http://localhost:8002/";
const API_URL = "https://appliancesapi.bongostores.shop/";
export const request = axios.create({
  baseURL: API_URL,
});
