import React from 'react';
import ThemeToggle from '../components/ThemeToggle'; 

const Settings = () => {
  return (
    <div className="h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="flex flex-col gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Appearance</h2>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Settings;
