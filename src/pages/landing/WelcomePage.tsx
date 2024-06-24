import React from 'react';
import LoginForm from './LoginForm';

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <img src="https://placehold.co/100x100" alt="CloudBlogger Logo" className="mb-4" />
      <h1 className="text-2xl font-bold text-center mb-2">Welcome to the SearchMe Web App</h1>
      <p className="text-center mb-6">Sign in or register your Account</p>
      <LoginForm />
    </div>
  );
};

export default WelcomePage;
