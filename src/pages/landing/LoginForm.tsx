// src/pages/landing/LoginForm.tsx
import React from 'react';

// Shared CSS classes for form elements
const sharedClasses = {
  input: 'p-2 border rounded-md focus:outline-none focus:ring focus:ring-primary',
  button: 'bg-green-500 text-white p-2 rounded-md hover:bg-green-600',
};

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col items-center space-y-4">
      <div className="flex space-x-2">
        <input type="text" placeholder="Username" className={sharedClasses.input} />
        <input type="password" placeholder="Password" className={sharedClasses.input} />
        <button type="submit" className={sharedClasses.button}>Login</button>
      </div>
      <button type="button" className={sharedClasses.button}>Sign Up</button>
    </form>
  );
};

export default LoginForm;
