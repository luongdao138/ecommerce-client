import * as types from '../types/category';

export const setLoading = () => {
  return { type: types.SET_LOADING };
};

export const removeLoading = () => {
  return { type: types.REMOVE_LOADING };
};

export const getAllCategories = () => {
  return { type: types.GET_ALL_CATEGORIES };
};

export const getAllCategoriesSucess = (data) => {
  return { type: types.GET_ALL_CATEGORIES_SUCCESS, payload: data };
};
