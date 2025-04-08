import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl font-bold mb-4">LexiQ Case Manager</h2>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            activeClassName="bg-gray-600" // This will highlight the active link
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cases"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            activeClassName="bg-gray-600"
          >
            Cases
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calendar"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            activeClassName="bg-gray-600"
          >
            Calendar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="block py-2 px-4 hover:bg-gray-600 rounded"
            activeClassName="bg-gray-600"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
