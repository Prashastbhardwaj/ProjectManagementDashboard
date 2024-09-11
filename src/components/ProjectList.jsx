import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const projects = useSelector((state) => state.projects);

  console.log(projects);
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/project/${project.id}`} className="no-underline">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-2">
                {project.name}
              </h3>
            </Link>
            <div
              className="text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
