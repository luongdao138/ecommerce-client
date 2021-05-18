import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from '../../hooks/useForm';
import { reviewProduct } from '../../redux/actions/productDetail';

const initState = {
  title: '',
  content: '',
};

const ReviewForm = ({ open, productId }) => {
  const dispatch = useDispatch();
  const submit = () => {
    if (values.title?.trim().length < 1)
      return toast.error('Title cannot be empty');
    if (values.content?.trim().length < 3)
      return toast.error('Review cannot be less than 3 characters!');

    dispatch(
      reviewProduct(
        {
          ...values,
          productId,
        },
        resetForm
      )
    );
  };

  const { handleChange, handleSubmit, values, resetForm } = useForm(
    initState,
    submit
  );

  if (!open) return null;

  return (
    <div className='review-form'>
      <ToastContainer autoClose={2500} />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={values.title}
          onChange={handleChange}
        />
        <textarea
          name='content'
          value={values.content}
          placeholder='Write your review...'
          onChange={handleChange}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
