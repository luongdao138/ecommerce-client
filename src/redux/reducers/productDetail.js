import initState from '../initState';
import * as types from '../types/productDetail';

const productDetailReducer = (state = initState.productDetail, action) => {
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
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        info: action.payload[1].product,
        ratings: action.payload[0].ratings,
        reviews: {
          list: action.payload[2].result.reviews,
          total: action.payload[2].result.total,
        },
      };
    case types.RATE_PRODUCT_SUCCESS:
      return {
        ...state,
        // ratings: createNewRatings(action.payload)
      };
    case types.REVIEW_PRODUCT_SUCCESS:
      const originalList = [...state.reviews.list];
      const newList =
        originalList.length <= 2
          ? originalList
          : originalList.slice(0, originalList.length - 1);

      return {
        ...state,
        reviews: {
          list: [action.payload, ...newList],
          total: state.reviews.total + 1,
        },
      };
    case types.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          list: action.payload.result.reviews,
          total: action.payload.result.total,
        },
      };
    case types.LIKE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          list: state.reviews.list.map((r) =>
            r._id.toString() === action.payload.review._id.toString()
              ? {
                  ...r,
                  likes: action.payload.review.likes,
                  dislikes: action.payload.review.dislikes,
                }
              : r
          ),
        },
      };
    default:
      return state;
  }
};

export default productDetailReducer;
