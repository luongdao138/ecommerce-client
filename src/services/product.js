import axios from '../helpers/axios';

export const getProducts = (config) => {
  const { order, sortBy, limit, skip, slug, type } = config;
  let queryArray = [];
  if (type) {
    queryArray.push(`type=${type}`);
  }
  if (order) {
    queryArray.push(`order=${order}`);
  }
  if (sortBy) {
    queryArray.push(`sortBy=${sortBy}`);
  }
  if (limit) {
    queryArray.push(`limit=${limit}`);
  }
  if (skip) {
    queryArray.push(`skip=${skip}`);
  }
  return axios.get(`/products/${slug}?${queryArray.join('&')}`);
};
