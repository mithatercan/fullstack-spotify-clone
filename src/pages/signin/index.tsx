import React from 'react';
import AuthLayout from '../../components/AuthLayout';

const Signin = () => {
  return <AuthLayout mode='signin' />;
};

Signin.authPage = true;
export default Signin;
