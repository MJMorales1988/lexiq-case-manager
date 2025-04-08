import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid'; 
import Button from './Button'; 
import Home from './Home'; // Add the import for Home component

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('dashboard'); // Manage active view

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <Router>
      <div className="flex">
        {/* Pass setActiveView to Sidebar */}
        <Sidebar setActiveView={setActiveView} /> 

        <div className="flex-1 p-6">
          {/* Always present Search bar and Add New Case button */}
          <div className="flex items-center mb-4 space-x-2">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            <Button className="btn">Add New Case</Button>
          </div>

          {/* Define your routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
