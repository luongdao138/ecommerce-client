import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import { rateProduct } from '../../redux/actions/productDetail';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const RatingForm = ({ open, productId }) => {
  const [currentOption, setCurrentOption] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.productDetail.loading);
  const options = [
    {
      label: 'Very Bad',
      star: 1,
    },
    {
      label: 'Not good',
      star: 2,
    },
    {
      label: 'Normal',
      star: 3,
    },
    {
      label: 'Good',
      star: 4,
    },
    {
      label: 'Amazing',
      star: 5,
    },
  ];
  if (!open) return null;

  const handleRateProduct = () => {
    if (!currentOption) return toast.error('Please select star!');

    dispatch(
      rateProduct({
        productId,
        userId: user._id,
        star: currentOption.star,
      })
    );
  };

  return (
    <div>
      <ToastContainer autoClose={2500} />
      <h4 className='rating-form__title'>Your rating about this product</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid rgba(0,0,0,0.1)',
          padding: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            {options.map((option, index) => (
              <StarIcon
                onMouseEnter={() => setCurrentOption(option)}
                key={index}
                style={{
                  marginRight: '10px',
                  color: index + 1 <= currentOption?.star ? '#EA9D02' : '#ccc',
                }}
              />
            ))}
          </div>
          <span style={{ fontWeight: 500, color: '#878787' }}>
            {currentOption?.label}
          </span>
        </div>
        <Button
          variant='contained'
          style={{
            color: '#fff',
            background: '#388e3c',
          }}
          disabled={loading}
          onClick={handleRateProduct}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default RatingForm;
