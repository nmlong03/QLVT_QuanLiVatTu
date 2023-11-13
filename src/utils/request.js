import axios from "axios";
import { getToken, setToken } from "./auth";
const service = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'Content-Type': 'application/json',
        // Add any other default headers you need
      },
})
// Add a request interceptor
service.interceptors.request.use(function (config) {
    config => {
      const token = getToken();
      if(token) {
        config.headers['Authorization'] = 'Bearer ' + getToken();
      }
    }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
service.interceptors.response.use(function (response) {
  if(response.headers.authorization){
    setToken(response.headers.authorization)
    response.data.token = response.headers.authorization
  }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default service
