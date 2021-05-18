import React from 'react';
import { useSelector } from 'react-redux';
import SingleReview from '../SingleReview';

const Reviews = () => {
  const reviews = useSelector((state) => state.productDetail.reviews.list);

  return (
    reviews && (
      <div className='product-reviews'>
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review} />
        ))}
      </div>
    )
  );
};

export default Reviews;
