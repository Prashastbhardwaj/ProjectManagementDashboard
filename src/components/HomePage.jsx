import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg rounded-lg bg-white dark:bg-gray-800 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Welcome to the Project Management Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Here, you can manage your projects efficiently and track progress.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-200 rounded-lg shadow-lg p-6 hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
            <Link to="/dashboard" className="block text-center text-lg font-semibold">
              Dashboard
            </Link>
          </div>
          <div className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg p-6 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300">
            <Link to="/settings" className="block text-center text-lg font-semibold">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
