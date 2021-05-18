import axios from '../helpers/axios';

export const getData = (slug) =>
  Promise.all([
    axios.get(`/ratings/${slug}`),
    axios.get(`/products/detail/${slug}`),
    axios.get(`/reviews/${slug}?limit=3`),
  ]);

export const rateProduct = (data) => axios.post('/ratings', data);

export const reviewProduct = (data) => axios.post('/reviews', data);

export const getReviews = (slug, limit, skip) =>
  axios.get(`/reviews/${slug}?limit=${limit}&skip=${skip}`);

export const likeReview = (reviewId, type) =>
  axios.post('/reviews/likeReview', { reviewId, type });
