import axios from '../helpers/axios';

export const getRatingsOfOneProduct = (slug) => axios.get(`/ratings/${slug}`);
