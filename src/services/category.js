import axios from '../helpers/axios';

export const getAllCategories = () => axios.get('/categories');
