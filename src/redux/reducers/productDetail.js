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
        questions: {
          list: action.payload[3].result.questions,
          total: action.payload[3].result.total,
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
    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: {
          list: action.payload.result.questions,
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
    case types.ANSWER_QUESTION_SUCCESS:
      let newListQuestion = [...state.questions.list];
      newListQuestion = newListQuestion.map((q) => {
        if (q._id === action.payload.questionId) q.answers.push(action.payload);

        return q;
      });
      return {
        ...state,
        questions: {
          ...state.questions,
          list: newListQuestion,
        },
      };
    case types.LIKE_ANSWER_SUCCESS:
      let newList2 = [...state.questions.list];
      newList2 = newList2.map((q) => {
        if (q._id === action.payload.questionId)
          q.answers = q.answers.map((a) => {
            if (a._id === action.payload._id) return action.payload;
            else return a;
          });

        return q;
      });
      return {
        ...state,
        questions: {
          ...state.questions,
          list: newList2,
        },
      };
    case types.CREATE_QUESTION_SUCCESS:
      let newList3 = [...state.questions.list];
      newList3 =
        newList3.length <= 2
          ? newList3
          : newList3.slice(0, newList3.length - 1);

      return {
        ...state,
        questions: {
          list: [action.payload, ...newList3],
          total: state.questions.total + 1,
        },
      };
    default:
      return state;
  }
};

export default productDetailReducer;
