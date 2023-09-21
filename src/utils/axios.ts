import axios from 'axios';
export const userRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_BASE_URL || 'http://localhost:9527/',
  // baseURL: 'https://luo-dian-api-release.meteor.today',

  // headers: {
  //   Accept: 'application/json',
  // },
});
