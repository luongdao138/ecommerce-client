import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetailImage from '../components/ProductDetailImage';
import ProductDetaiInfo from '../components/ProductDetailInfo';
import Rating from '../components/Rating';
import DetailQuestions from '../components/DetailQuestions';
import { getData } from '../redux/actions/productDetail';

const ProductDetail = () => {
  const { slug } = useParams();
  const loading = useSelector((state) => state.productDetail.loading);
  const ratings = useSelector((state) => state.productDetail.ratings);
  const product = useSelector((state) => state.productDetail.info);
  const reviews = useSelector((state) => state.productDetail.reviews);
  const questions = useSelector((state) => state.productDetail.questions);
  const dispatch = useDispatch();
  console.log(loading);
  useEffect(() => {
    dispatch(getData(slug));
  }, [slug]);

  return (
    <div
      style={{
        padding: 10,
        position: 'relative',
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <ProductDetailImage product={product} />
        </Grid>
        <Grid item xs={8}>
          <ProductDetaiInfo
            product={product}
            average={ratings?.average}
            ratingCount={ratings?.total}
            reviewCount={reviews?.total}
          />
          <Rating
            ratings={ratings}
            productId={product?._id}
            reviewCount={reviews?.total}
            slug={slug}
          />
          <DetailQuestions
            productId={product?._id}
            questions={questions}
            slug={slug}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
