import { all } from 'redux-saga/effects';
import authSaga from './auth';
import bannerSaga from './banner';
import categorySaga from './category';
import productSaga from './product';
import productDetailSaga from './productDetail';

export default function* rootSaga() {
  yield all([
    authSaga(),
    categorySaga(),
    productSaga(),
    bannerSaga(),
    productDetailSaga(),
  ]);
}
