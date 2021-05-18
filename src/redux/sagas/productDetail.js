import { all, put, call, takeLatest } from 'redux-saga/effects';
import * as services from '../../services/productDetail';
import * as types from '../types/productDetail';
import * as actions from '../actions/productDetail';
import { toast } from 'react-toastify';
import { logout } from '../actions/auth';

function* getData({ payload }) {
  yield put(actions.setLoading());
  try {
    const res = yield call(services.getData, payload);
    yield put(actions.getDataSuccess(res.map((x) => x.data)));
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.error);
      yield put(actions.getDataFailure(error.response.data.error));
    } else {
      if (error.response.status === 401) {
        yield put(logout());
      } else {
        toast.error('Add product failed! Please try again!');
        yield put(
          actions.getDataFailure('Add product failed! Please try again!')
        );
      }
    }
  }
  yield put(actions.removeLoading());
}

function* rateProduct({ payload }) {
  yield put(actions.setLoading());
  try {
    const res = yield call(services.rateProduct, payload);
    toast.success(res.data.message);
  } catch (error) {
    if (error.response.status === 401) {
      yield put(logout());
    } else {
      toast.error('Rate product failed! Please try again!');
    }
  }
  yield put(actions.removeLoading());
}

function* reviewProduct({ payload }) {
  yield put(actions.setLoading());
  try {
    const res = yield call(services.reviewProduct, payload.data);
    yield put(actions.reviewProductSuccess(res.data.review));
    payload.cb();
  } catch (error) {
    if (error.response.status === 401) {
      yield put(logout());
    } else {
      toast.error('Review product failed! Please try again!');
    }
  }
  yield put(actions.removeLoading());
}

function* getReviews({ payload }) {
  yield put(actions.setLoading());
  try {
    const res = yield call(
      services.getReviews,
      payload.slug,
      payload.limit,
      payload.skip
    );
    yield put(actions.getReviewsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(logout());
    } else {
      toast.error('Review product failed! Please try again!');
    }
  }
  yield put(actions.removeLoading());
}

function* likeReview({ payload }) {
  yield put(actions.setLoading());
  try {
    const res = yield call(services.likeReview, payload.reviewId, payload.type);
    yield put(actions.likeReviewSuccess(res.data));
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      yield put(logout());
    } else {
      toast.error('Review product failed! Please try again!');
    }
  }
  yield put(actions.removeLoading());
}

function* watcherGetReviews() {
  yield takeLatest(types.GET_REVIEWS, getReviews);
}

function* watcherGetData() {
  yield takeLatest(types.GET_DATA, getData);
}

function* watcherRateProduct() {
  yield takeLatest(types.RATE_PRODUCT, rateProduct);
}

function* watcherReviewProduct() {
  yield takeLatest(types.REVIEW_PRODUCT, reviewProduct);
}

function* watcherLikeReview() {
  yield takeLatest(types.LIKE_REVIEW, likeReview);
}

export default function* productDetailSaga() {
  yield all([
    watcherGetData(),
    watcherRateProduct(),
    watcherReviewProduct(),
    watcherGetReviews(),
    watcherLikeReview(),
  ]);
}
