import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Dialog } from '@material-ui/core';
import QuestionModal from '../QuestionModal';
import { answerQuestion, likeAnswer } from '../../redux/actions/productDetail';

const ProductQuestions = ({ question }) => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const handleAnswerQuestion = () => {
    dispatch(
      answerQuestion(
        {
          questionId: question._id,
          content,
        },
        () => {
          setContent('');
        }
      )
    );
  };

  return (
    <div className='single-question'>
      <p className='single-question-que'>
        <span>Q: {question.content}</span>
        <span>{question.username}</span>
      </p>
      {question.answers.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p className='single-question-ans'>
            <span>A: {question.answers[0]?.content}</span>
            <span>{question.answers[0]?.username}</span>
          </p>
          <div style={{ display: 'flex' }}>
            <button
              className='single-ques-btn'
              onClick={() =>
                dispatch(likeAnswer(question.answers[0]._id, 'like'))
              }
            >
              <ThumbUpAltIcon style={{ marginRight: '5px' }} fontSize='small' />
              {question.answers[0].likes.length}
            </button>
            <button
              className='single-ques-btn'
              onClick={() =>
                dispatch(likeAnswer(question.answers[0]._id, 'dislike'))
              }
            >
              <ThumbDownIcon style={{ marginRight: '5px' }} fontSize='small' />
              {question.answers[0].dislikes.length}
            </button>
          </div>
        </div>
      )}
      {question.answers.length > 1 && (
        <button className='read-other-ans-btn' onClick={() => setOpen(true)}>
          Read others answers
        </button>
      )}

      {authenticated && (
        <div className='answer-ques'>
          <textarea
            type='text'
            placeholder='Your answer...'
            variant='outlined'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button disabled={content === ''} onClick={handleAnswerQuestion}>
              Send
            </button>
          </div>
        </div>
      )}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth='lg'>
        <QuestionModal question={question} setOpen={setOpen} />
      </Dialog>
    </div>
  );
};

export default ProductQuestions;
