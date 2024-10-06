import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.BASE_URL;

export const apiBaseURL = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: Cookies.get("token"),
  },
});
