import axios from 'axios';
import { config } from '../config'

const axiosInstance = axios.create({
    baseURL: config.API_URL,
    timeout: 0,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'withCredentials': true
    }
});

axiosInstance.interceptors.response.use(                                                                  
    response => response,                                                                                       // axios submits request
    async error => {
      const originalRequest = error.config;
        if (error.response.status === 401) { 
            window.localStorage.setItem('access_token', null);
        }
      return Promise.reject(error);
  }
);

/*
  Each time a request is made, the access token needs to be added to the header
*/
axiosInstance.interceptors.request.use(
    config => {
      config.headers['Authorization'] = window.localStorage.getItem('access_token');
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );

export default axiosInstance;