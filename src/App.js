import React, { useState } from 'react';
import './index.css';

function App() {
  return (
    <div className="flex">
      <aside className="w-64 bg-teal-700 text-white min-h-screen p-4 shadow-lg rounded-r-xl">
        <h1 className="text-2xl font-bold mb-6 text-purple-600">LexiQ Manager</h1>
        <ul className="space-y-4">
          <li><button className="w-full py-2 px-4 bg-teal-600 rounded-full shadow hover:bg-teal-800 transition">Dashboard</button></li>
          <li><button className="w-full py-2 px-4 bg-teal-600 rounded-full shadow hover:bg-teal-800 transition">Add New Case</button></li>
          <li><button className="w-full py-2 px-4 bg-teal-600 rounded-full shadow hover:bg-teal-800 transition">Calendar</button></li>
          <li><button className="w-full py-2 px-4 bg-teal-600 rounded-full shadow hover:bg-teal-800 transition">Files</button></li>
          <li><button className="w-full py-2 px-4 bg-teal-600 rounded-full shadow hover:bg-teal-800 transition">Users</button></li>
        </ul>
      </aside>
      <main className="p-8 flex-1">
        {/* Main content here */}
      </main>
    </div>
  );
}

export default App;
