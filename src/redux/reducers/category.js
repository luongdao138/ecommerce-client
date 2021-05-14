import initState from '../initState';
import * as types from '../types/category';

const categoryReducer = (state = initState.category, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case types.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
