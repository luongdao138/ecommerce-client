import { TextField, IconButton } from '@material-ui/core';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './style.css';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { ToastContainer } from 'react-toastify';

const initState = {
  email: '',
  password: '',
};
const Login = ({ width, handleClose, redirectPath, handleOpenSignup }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const submit = () => {
    dispatch(
      login(values, () => {
        if (handleClose) handleClose();
        resetForm();
        const path = location.pathname + location.search;
        if (path !== redirectPath) {
          console.log('Not equal');
          history.push(redirectPath);
        }
      })
    );
  };
  const { values, resetForm, handleSubmit, handleChange } = useForm(
    initState,
    submit
  );

  return (
    <div
      className='login'
      style={{ width: `${width}vw`, position: 'relative', background: '#fff' }}
    >
      <ToastContainer autoClose={2500} />
      {handleClose && (
        <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            right: '15px',
            top: '10px',
            cursor: 'pointer',
            zIndex: 200,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <div className='login__hero'>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className='login__main'>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name='email'
            value={values.email}
            onChange={handleChange}
            label='Enter email'
            style={{ marginBottom: '32px' }}
            autoFocus
          />
          <TextField
            fullWidth
            label='Enter password'
            name='password'
            value={values.password}
            onChange={handleChange}
            type='password'
          />
          <p className='policy'>
            By continuing, you agree to Flipkart's{' '}
            <Link to='/' style={{ color: '#2874f0' }}>
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link to='/' style={{ color: '#2874f0' }}>
              Privacy Policy
            </Link>
          </p>
          <button className='login__btn' type='submit'>
            Login
          </button>
        </form>
        <p style={{ textAlign: 'right', marginTop: '12px' }}>
          <Link
            to='/'
            style={{ color: '#2874f0', fontWeight: '500', fontSize: '14px' }}
          >
            Forgot password?
          </Link>
        </p>
        <Link
          to='/signup'
          className='signup-link'
          onClick={(e) => {
            e.preventDefault();
            if (handleClose) {
              handleOpenSignup();
              handleClose();
            } else {
              history.push('/signup');
            }
          }}
        >
          New to Flipkart? Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
