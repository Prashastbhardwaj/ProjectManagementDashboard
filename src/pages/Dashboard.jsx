import React from 'react';
import CreateProjectForm from '../components/CreateProjectForm';
import ProjectList from '../components/ProjectList';

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <CreateProjectForm />
      <ProjectList />
    </div>
  );
};

export default Dashboard;
