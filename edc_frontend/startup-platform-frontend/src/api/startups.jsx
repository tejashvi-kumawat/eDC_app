import apiClient from './axios';

const apiFunctions = {
  getPublicStartups: async () => {
    const res = await apiClient.get('/startups/public/');
    return res.data;
  },
  getUserStartups: async () => {
    const res = await apiClient.get('/startups/');
    return res.data;
  },
  getAllStartups: async () => {
    const res = await apiClient.get('/startups/admin/all/');
    return res.data;
  },
  getPendingStartups: async () => {
    const res = await apiClient.get('/startups/admin/pending/');
    return res.data;
  },
  createStartup: async (data) => {
    const res = await apiClient.post('/startups/', data);
    return res.data;
  },
  approveStartup: async (id) => {
    const res = await apiClient.post(`/startups/admin/${id}/approve/`);
    return res.data;
  },
  rejectStartup: async (id) => {
    const res = await apiClient.post(`/startups/admin/${id}/reject/`);
    return res.data;
  },
  getAdminStats: async () => {
    const res = await apiClient.get('/startups/admin/stats/');
    return res.data;
  }
};

export const getPublicStartups = apiFunctions.getPublicStartups;
export const getUserStartups = apiFunctions.getUserStartups;
export const getAllStartups = apiFunctions.getAllStartups;
export const getPendingStartups = apiFunctions.getPendingStartups;
export const createStartup = apiFunctions.createStartup;
export const approveStartup = apiFunctions.approveStartup;
export const rejectStartup = apiFunctions.rejectStartup;
export const getAdminStats = apiFunctions.getAdminStats;