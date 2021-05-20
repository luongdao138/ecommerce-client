import React, { useState } from 'react';
import './style.css';
import SingleQuestion from '../SingleQuestion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion } from '../../redux/actions/productDetail';

const DetailQuestions = ({ productId, questions, slug }) => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleCreateQuestion = () => {
    dispatch(
      createQuestion(
        {
          productId,
          content,
        },
        () => setContent('')
      )
    );
  };

  return (
    <div className='detail-questions'>
      <div className='title-wrapper'>
        <h2 className='detail-sections-title'>Questions and Answers</h2>
        {authenticated && (
          <>
            <textarea
              type='text'
              placeholder='Your question...'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button disabled={content === ''} onClick={handleCreateQuestion}>
                Send
              </button>
            </div>
          </>
        )}
      </div>

      <div className='detail-questions-main'>
        {questions?.list.map((question) => (
          <SingleQuestion key={question._id} question={question} />
        ))}
      </div>
      {questions?.total > 0 && (
        <Link
          to={`/products/${slug}/questions`}
          style={{
            display: 'block',
            padding: '20px',
            paddingTop: 0,
          }}
          className='all-review-link'
        >
          Views all {questions?.total} questions
        </Link>
      )}
    </div>
  );
};

export default DetailQuestions;
