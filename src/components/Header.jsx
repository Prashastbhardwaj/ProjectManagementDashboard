import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Project Management Dashboard</h1>
        <nav>
         
          <span className="m-4"><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></span>  
            <span className="m-4"><Link to="/settings" className="hover:text-gray-400">Settings</Link></span>
       
        </nav>
      </div>
    </header>
  );
};

export default Header;
