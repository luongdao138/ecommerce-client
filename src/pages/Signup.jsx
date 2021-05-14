import React from 'react';
import SignupPage from '../components/Signup';

const Signup = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <SignupPage width={70} />
    </div>
  );
};

export default Signup;
