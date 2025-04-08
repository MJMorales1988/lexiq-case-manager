import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setActiveView }) => {
  const handleNavClick = (view) => {
    setActiveView(view);
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl font-bold mb-4">LexiQ Case Manager</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            onClick={() => handleNavClick('dashboard')}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/cases"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            onClick={() => handleNavClick('cases')}
          >
            Cases
          </Link>
        </li>
        <li>
          <Link
            to="/calendar"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            onClick={() => handleNavClick('calendar')}
          >
            Calendar
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            onClick={() => handleNavClick('settings')}
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
