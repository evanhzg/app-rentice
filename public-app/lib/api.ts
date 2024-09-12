import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export const fetchOffers = async (params?: Record<string, any>) => {
  const response = await api.get('/offers', { params });
  console.log(response)
  
  return response.data;
};

export default api;