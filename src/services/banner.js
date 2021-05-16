import axios from '../helpers/axios';

export const getAllBanners = () => axios.get('/banners?type=client');
