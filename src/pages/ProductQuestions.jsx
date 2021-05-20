import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllQuestions from '../components/AllQuestions';
import ReviewInfo from '../components/ReviewInfo';
import { getData } from '../redux/actions/productDetail';

const ProductQuestions = () => {
  const product = useSelector((state) => state.productDetail.info);
  const reviews = useSelector((state) => state.productDetail.reviews);
  const ratings = useSelector((state) => state.productDetail.ratings);
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    if (!product) {
      dispatch(getData(slug));
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={3}>
        <ReviewInfo
          product={product}
          average={ratings?.average}
          ratingCount={ratings?.total}
          reviewCount={reviews?.total}
        />
      </Grid>
      <Grid item xs={9}>
        <AllQuestions product={product} />
      </Grid>
    </Grid>
  );
};

export default ProductQuestions;
