// src/pages/landing/LoginForm.tsx

import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col items-center space-y-4">
      <div className="flex space-x-2">
        <input type="text" placeholder="Username" className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-primary w-64" />
        <input type="password" placeholder="Password" className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-primary w-64" />
      </div>
      <div className="space-x-4 mt-4">
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-32">Login</button>
        <button type="button" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-32">Sign Up</button>
      </div>
    </form>
  );
};

export default LoginForm;

// src/pages/landing/WelcomePage.tsx

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
