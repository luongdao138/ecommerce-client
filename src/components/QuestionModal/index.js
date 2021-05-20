import React from 'react';
import './style.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useDispatch } from 'react-redux';
import { likeAnswer } from '../../redux/actions/productDetail';

const QuestionModal = ({ question, setOpen }) => {
  const dispatch = useDispatch();
  return (
    <div className='question-modal'>
      <h4 className='modal-ques'>Q: {question.content}</h4>
      {question.answers.map((answer) => {
        return (
          <div className='answer-item' key={answer._id}>
            <div>
              <p className='modal-ans'>A: {answer.content}</p>
              <span className='ans-username'>{answer.username}</span>
            </div>
            <div style={{ display: 'flex' }}>
              <button
                className='single-ques-btn'
                onClick={() => dispatch(likeAnswer(answer._id, 'like'))}
              >
                <ThumbUpAltIcon
                  style={{ marginRight: '5px' }}
                  fontSize='small'
                />
                {answer.likes.length}
              </button>
              <button
                className='single-ques-btn'
                onClick={() => dispatch(likeAnswer(answer._id, 'dislike'))}
              >
                <ThumbDownIcon
                  style={{ marginRight: '5px' }}
                  fontSize='small'
                />
                {answer.dislikes.length}
              </button>
            </div>
          </div>
        );
      })}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '20px',
        }}
      >
        <button onClick={() => setOpen(false)}> Cancel</button>
      </div>
    </div>
  );
};

export default QuestionModal;
