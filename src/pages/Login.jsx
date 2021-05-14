import React from 'react';
import LoginPage from '../components/Login';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const from = new URLSearchParams(location.search).get('from');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <LoginPage width={70} redirectPath={from} />
    </div>
  );
};

export default Login;
