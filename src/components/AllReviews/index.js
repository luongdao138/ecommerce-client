import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './style.css';
import RatingStar from '../RatingStar';
import { useDispatch } from 'react-redux';
import { getReviews } from '../../redux/actions/productDetail';
import Pagination from '@material-ui/lab/Pagination';
import SingleReview from '../SingleReview';

const AllReviews = ({ reviews, product, ratings }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const limit = 2;

  useEffect(() => {
    if (reviews) setTotalPages(Math.ceil(reviews.total / limit));
  }, [reviews?.total, limit]);

  useEffect(() => {
    console.log('ok');
    if (product)
      dispatch(getReviews(product.slug, limit, Number(page - 1) * limit));
  }, [page, dispatch, limit, product?.slug]);

  return (
    <div className='all-reviews'>
      <div className='all-reviews-header'>
        <h3>{product?.title}</h3>
      </div>
      <Grid
        container
        style={{
          alignItems: 'center',
          paddingTop: '20px',
          borderTop: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <RatingStar ratings={ratings} reviewCount={reviews?.total} />
      </Grid>
      <div className='all-reviews-main'>
        {reviews?.list.map((review) => (
          <SingleReview key={review._id} review={review} />
        ))}
      </div>
      <div
        style={{
          margin: '20px 10px 0 10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '14px', fontWeight: 500 }}>
          Page {page} of {totalPages}
        </span>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, page) => setPage(page)}
          color='primary'
        />
      </div>
    </div>
  );
};

export default AllReviews;
