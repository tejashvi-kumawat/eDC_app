import apiClient from './axios';
import { setStoredToken } from '../utils/auth';

export const login = async (username, password) => {
  const response = await apiClient.post('/auth/login/', {
    username,
    password
  });
  
  if (response.data.tokens) {
    setStoredToken(response.data.tokens.access);
  }
  
  return response.data;
};

export const register = async (userData) => {
  const response = await apiClient.post('/auth/register/', userData);
  
  if (response.data.tokens) {
    setStoredToken(response.data.tokens.access);
  }
  
  return response.data;
};

export const getProfile = async () => {
  const response = await apiClient.get('/auth/profile/');
  return response.data;
};

export const logout = async () => {
  try {
    await apiClient.post('/auth/logout/');
  } catch (error) {
    console.error('Logout error:', error);
  }
};
