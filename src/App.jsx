import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dashboard from './pages/Dashboard'; 
import ProjectDetails from './pages/ProjectDetails'; 
import Settings from './pages/Settings'; 
import CreateProjectForm from './components/CreateProjectForm'; 
import HomePage from './components/HomePage';

import { useSelector  } from 'react-redux'

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
     <DndProvider backend={HTML5Backend}>
     <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/create-project" element={<CreateProjectForm />} /> 
        </Routes>
      
      </main>
     </DndProvider>
    </>
  );
};

export default App;
