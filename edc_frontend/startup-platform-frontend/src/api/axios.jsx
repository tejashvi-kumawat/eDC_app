import axios from 'axios';
import { getStoredToken, removeStoredToken } from '../utils/auth';

const API_BASE = 'https://edc-backend.onrender.com/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use(
  (config) => {
    const token = getStoredToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeStoredToken();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
