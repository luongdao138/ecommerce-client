import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as types from '../types/category';
import * as actions from '../actions/category';
import * as services from '../../services/category';
import { toast } from 'react-toastify';

function* getAllCategories() {
  yield put(actions.setLoading());
  try {
    const res = yield call(services.getAllCategories);
    yield put(actions.getAllCategoriesSucess(res.data.categories));
  } catch (error) {
    console.log(error);
  }
  yield put(actions.removeLoading());
}

function* watcherGetAllCategories() {
  yield takeLatest(types.GET_ALL_CATEGORIES, getAllCategories);
}

export default function* categorySaga() {
  yield all([watcherGetAllCategories()]);
}
