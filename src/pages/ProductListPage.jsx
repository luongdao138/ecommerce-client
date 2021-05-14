import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../redux/actions/product';
import ProductPage from '../components/ProductPage';
import ProductSlide from '../components/ProductSlide';

const ProductListPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const limit = 3;
  const type = new URLSearchParams(location.search).get('type');
  const dispatch = useDispatch();
  console.log(slug, type);
  useEffect(() => {
    dispatch(
      getProducts({
        slug,
        type,
        limit,
      })
    );
  }, [dispatch, slug, type]);

  if (type === 'page') return <ProductSlide slug={slug} type={type} />;

  if (type === 'product')
    return <ProductPage slug={slug} type={type} limit={limit} />;

  return (
    <div>
      <h1>Product List Page</h1>
    </div>
  );
};

export default ProductListPage;
