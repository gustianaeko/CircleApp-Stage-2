import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const apiBaseURL = axios.create({
  baseURL: `${baseURL}`,
});
