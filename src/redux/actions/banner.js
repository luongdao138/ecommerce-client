import * as types from '../types/banner';

export const setLoading = () => {
  return { type: types.SET_LOADING };
};

export const removeLoading = () => {
  return { type: types.REMOVE_LOADING };
};

export const getBanners = () => ({
  type: types.GET_BANNERS,
});

export const getBannerSuccess = (banners) => ({
  type: types.GET_BANNERS_SUCCESS,
  payload: banners,
});
