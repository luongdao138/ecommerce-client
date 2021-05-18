import { Avatar } from '@material-ui/core';
import React from 'react';
import './style.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useDispatch, useSelector } from 'react-redux';
import { likeReview } from '../../redux/actions/productDetail';
import { toast, ToastContainer } from 'react-toastify';

const Review = ({ review }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const handleLikeReview = (reviewId, type) => {
    if (!authenticated) {
      toast.error('You have to login first!');
    } else {
      dispatch(likeReview(reviewId, type));
    }
  };
  return (
    <div className='review-item'>
      <ToastContainer autoClose={2500} />
      <div className='review-item-header'>
        <Avatar
          style={{
            width: '30px',
            height: '30px',
          }}
          src={
            review.userId.avatar ? review.userId.avatar : '/images/no-img.png'
          }
          alt='Image'
        />
        <span>{review.title}</span>
      </div>
      <p className='review-item-content'>{review.content}</p>
      <div className='review-item-footer'>
        <span className='review-item-username'>{review.userId.username}</span>
        <div>
          <button onClick={() => handleLikeReview(review._id, 'like')}>
            <ThumbUpAltIcon style={{ marginRight: '5px' }} fontSize='small' />
            {review.likes.length}
          </button>
          <button onClick={() => handleLikeReview(review._id, 'dislike')}>
            <ThumbDownIcon style={{ marginRight: '5px' }} fontSize='small' />
            {review.dislikes.length}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
