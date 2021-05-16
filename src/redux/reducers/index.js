import { combineReducers } from 'redux';
import authReducer from './auth';
import bannerReducer from './banner';
import categoryReducer from './category';
import productReducer from './product';

const reducers = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  banner: bannerReducer,
});

export default reducers;
