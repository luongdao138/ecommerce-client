import * as types from '../types/banner';
import initState from '../initState';

const bannerReducer = (state = initState.banner, action) => {
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
    case types.GET_BANNERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        errorMessage: null,
      };

    default:
      return state;
  }
};

export default bannerReducer;
