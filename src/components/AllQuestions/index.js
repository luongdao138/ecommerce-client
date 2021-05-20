import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from '../../redux/actions/productDetail';
import SingleQuestion from '../SingleQuestion';
import './style.css';

const AllQuestions = ({ product }) => {
  const questions = useSelector((state) => state.productDetail.questions);
  const dispatch = useDispatch();
  const limit = 3;
  const [current, setCurrent] = useState(3);

  useEffect(() => {
    if (product) {
      console.log('OK');
      dispatch(getQuestions(product.slug, current, 0));
    }
  }, [dispatch, product?.slug, current]);

  const handleLoadMore = () => {
    setCurrent((old) => current + limit);
  };

  return (
    <div className='all-questions'>
      {questions?.list.map((question) => (
        <SingleQuestion key={question._id} question={question} />
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {current < questions?.total && (
          <button className='load-more-ques-btn' onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default AllQuestions;
