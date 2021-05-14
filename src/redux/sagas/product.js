import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../types/product';
import * as actions from '../actions/product';
import * as services from '../../services/product';
import { toast } from 'react-toastify';

function* getProducts({ payload }) {
  yield put(actions.setLoading());
  try {
    const res = yield call(services.getProducts, payload);
    console.log(res);
    yield put(actions.getProductsSuccess(res.data.result));
  } catch (error) {
    toast.error('Get products failed! Please try again!');
    yield put(
      actions.getProductsFailure('Get products failed! Please try again!')
    );
  }
  yield put(actions.removeLoading());
}

function* watcherGetProducts() {
  yield takeLatest(types.GET_PRODUCTS, getProducts);
}

export default function* productSaga() {
  yield all([watcherGetProducts()]);
}
