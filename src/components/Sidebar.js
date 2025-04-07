
import React from "react";

const Sidebar = ({ setActiveView }) => {
  const menu = [
    { label: "Dashboard", view: "dashboard" },
    { label: "Add New Case", view: "add" },
    { label: "Calendar", view: "calendar" },
    { label: "Files", view: "files" },
    { label: "Users", view: "users" }
  ];

  return (
    <div className="w-60 min-h-screen bg-white shadow-md p-4 space-y-4">
      <h1 className="text-2xl font-bold text-purple-800 mb-6">LexiQ Manager</h1>
      {menu.map(({ label, view }) => (
        <button
          key={view}
          onClick={() => setActiveView(view)}
          className="w-full text-left px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
