import axios from 'axios';
import { rootUrl } from '../constants/urlConfig';

const axiosInstance = axios.create({
  baseURL: rootUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

axiosInstance.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return req;
});

export default axiosInstance;
