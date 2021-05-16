import { all, put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../types/banner';
import * as actions from '../actions/banner';
import * as services from '../../services/banner';
import { logout } from '../actions/auth';

function* getBanners() {
  yield put(actions.setLoading());
  try {
    const res = yield call(services.getAllBanners);
    console.log(res);
    yield put(actions.getBannerSuccess(res.data.banners));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(logout());
    } else {
      console.log(error);
    }
  }
  yield put(actions.removeLoading());
}

function* watcherGetBanners() {
  yield takeLatest(types.GET_BANNERS, getBanners);
}

export default function* bannerSaga() {
  yield all([watcherGetBanners()]);
}
