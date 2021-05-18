import * as types from '../types/productDetail';

export const setLoading = () => {
  return { type: types.SET_LOADING };
};

export const removeLoading = () => {
  return { type: types.REMOVE_LOADING };
};

export const getData = (slug) => {
  return { type: types.GET_DATA, payload: slug };
};

export const getDataSuccess = (data) => {
  return { type: types.GET_DATA_SUCCESS, payload: data };
};

export const getDataFailure = (errorMessage) => {
  return { type: types.GET_DATA_FAILURE, payload: errorMessage };
};

export const rateProduct = (data) => {
  return { type: types.RATE_PRODUCT, payload: data };
};

export const rateProductSuccess = (data) => {
  return { type: types.RATE_PRODUCT_SUCCESS, payload: data };
};

export const rateProductFailure = (errorMessage) => {
  return { type: types.RATE_PRODUCT_FAILURE, payload: errorMessage };
};

export const reviewProduct = (data, cb) => {
  return { type: types.REVIEW_PRODUCT, payload: { data, cb } };
};

export const reviewProductSuccess = (review) => {
  return { type: types.REVIEW_PRODUCT_SUCCESS, payload: review };
};

export const getReviews = (slug, limit, skip) => {
  return { type: types.GET_REVIEWS, payload: { slug, skip, limit } };
};

export const getReviewsSuccess = (data) => {
  return { type: types.GET_REVIEWS_SUCCESS, payload: data };
};

export const likeReview = (reviewId, type) => {
  return { type: types.LIKE_REVIEW, payload: { reviewId, type } };
};

export const likeReviewSuccess = (review) => {
  return { type: types.LIKE_REVIEW_SUCCESS, payload: review };
};
