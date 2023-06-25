import axios from 'axios';
export const userRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_BASE_URL || 'http://localhost:9527/',
  // headers: {
  //   Accept: 'application/json',
  // },
});
