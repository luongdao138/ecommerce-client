import { TextField, IconButton } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { useForm } from '../../hooks/useForm';
import { ToastContainer } from 'react-toastify';

const initState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
};
const Signup = ({ width, handleClose, handleOpenLogin }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(
      register(values, () => {
        history.push('/login?from=/');
      })
    );
  };
  const { values, resetForm, handleSubmit, handleChange } = useForm(
    initState,
    submit
  );

  return (
    <div
      className='signup'
      style={{ width: `${width}vw`, position: 'relative' }}
    >
      <ToastContainer />
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
        <h2>Looks like you're new here!</h2>
        <p>Sign up with your email to get started</p>
      </div>
      <div className='login__main'>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Enter firstname'
            style={{ marginBottom: '32px' }}
            value={values.firstName}
            onChange={handleChange}
            name='firstName'
            autoFocus
          />
          <TextField
            fullWidth
            label='Enter lastname'
            style={{ marginBottom: '32px' }}
            value={values.lastName}
            onChange={handleChange}
            name='lastName'
          />
          <TextField
            fullWidth
            label='Enter username'
            style={{ marginBottom: '32px' }}
            value={values.username}
            onChange={handleChange}
            name='username'
          />
          <TextField
            fullWidth
            label='Enter email'
            style={{ marginBottom: '32px' }}
            value={values.email}
            onChange={handleChange}
            name='email'
          />
          <TextField
            fullWidth
            label='Enter password'
            type='password'
            value={values.password}
            onChange={handleChange}
            name='password'
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
            Signup
          </button>
          <button
            className='redirect'
            type='button'
            onClick={() => {
              if (handleClose) {
                handleOpenLogin();
                handleClose();
              } else {
                history.push('/login?from=/');
              }
            }}
          >
            Existing user? Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
