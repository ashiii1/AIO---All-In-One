import axios from "axios";

const BASE_URL = "https://ecommercebackend-o0yl.onrender.com";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
