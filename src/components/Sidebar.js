
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
    <div className="w-64 min-h-screen bg-white shadow-md p-4 space-y-4">
      <h1 className="text-3xl font-extrabold text-purple-800 mb-6 text-center drop-shadow">
        LexiQ Manager
      </h1>
      {menu.map(({ label, view }) => (
        <button
          key={view}
          onClick={() => setActiveView(view)}
          className="w-full text-center px-4 py-3 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 transition"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
