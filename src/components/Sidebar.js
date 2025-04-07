import React from "react";

const Sidebar = ({ setActiveView, setSelectedCase }) => (
  <div className="w-64 bg-teal-700 text-white p-4 flex flex-col space-y-4">
    <h1 className="text-2xl font-bold mb-4">
      <span className="text-purple-600">LexiQ</span> Manager
    </h1>
    <button
      className="rounded-full py-2 px-4 bg-teal-600 shadow"
      onClick={() => {
        setActiveView("calendar");
        setSelectedCase(null);
      }}
    >
      Calendar
    </button>
  </div>
);

export default Sidebar;