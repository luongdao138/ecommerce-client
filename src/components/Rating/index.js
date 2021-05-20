import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import './style.css';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import RatingForm from './RatingForm';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import { Link } from 'react-router-dom';
import RatingStar from '../RatingStar';

const Rating = ({ slug, ratings, productId, reviewCount }) => {
  const stars = [1, 2, 3, 4, 5];
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.user);

  const [openRating, setOpenRating] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  if (!ratings) return <p>Loading...</p>;

  const handleOpenRate = () => {
    if (authenticated) {
      setOpenRating(true);
    } else {
      history.push(`/login?from=${location.pathname}`);
    }
  };

  const handleOpenReview = () => {
    if (authenticated) {
      setOpenReview(true);
    } else {
      history.push(`/login?from=${location.pathname}`);
    }
  };

  return (
    <div className='rating-container'>
      <div className='title_wrapper'>
        <h1>Ratings & Reviews</h1>
      </div>
      <Grid container style={{ alignItems: 'center' }}>
        <RatingStar ratings={ratings} reviewCount={reviewCount} />
        <Grid item xs={5}>
          <div className='btn-wrapper'>
            <button onClick={handleOpenRate}>Rate Product</button>
            <button onClick={handleOpenReview}>Review Product</button>
          </div>
        </Grid>
      </Grid>
      <RatingForm open={openRating} productId={productId} />
      <ReviewForm open={openReview} productId={productId} />
      <Reviews />
      {reviewCount > 0 && (
        <Link to={`/products/${slug}/reviews`} className='all-review-link'>
          Views all {reviewCount} reviews
        </Link>
      )}
    </div>
  );
};

export default Rating;
