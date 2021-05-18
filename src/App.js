import React, { useEffect } from 'react';
import CategoryMenu from './components/CategoryMenu';
import Header from './components/header';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from './redux/actions/category';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser, removeLoading } from './redux/actions/auth';
import Login from './pages/Login';
import PrivateRoute from './helpers/PrivateRoute';
import Profile from './pages/Profile';
import LoggedInRoute from './helpers/LoggedInRoute';
import Signup from './pages/Signup';
import ProductDetail from './pages/ProductDetail';
import ProductReviews from './pages/ProductReviews';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const categoryList = useSelector((state) => state.category.list);
  const authenticated = useSelector((state) => state.auth.authenticated);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (!categoryList) {
      dispatch(getAllCategories());
    }
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(loadUser(token));
    } else {
      dispatch(removeLoading());
    }
  }, [token, dispatch]);

  return (
    <div className='App'>
      <Router>
        <Header />
        <CategoryMenu />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/products/:slug' exact component={ProductListPage} />
          <Route
            path='/products/:slug/reviews'
            exact
            component={ProductReviews}
          />
          <Route
            path='/products/detail/:slug'
            exact
            component={ProductDetail}
          />
          <LoggedInRoute
            authenticated={authenticated}
            path='/login'
            redirectPath='/'
          >
            <Login />
          </LoggedInRoute>
          <LoggedInRoute
            authenticated={authenticated}
            path='/signup'
            redirectPath='/'
          >
            <Signup />
          </LoggedInRoute>
          <PrivateRoute
            authenticated={authenticated}
            loading={loading}
            redirectPath='/profile'
            path='/profile'
          >
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
