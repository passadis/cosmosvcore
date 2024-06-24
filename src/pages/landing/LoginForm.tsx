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
