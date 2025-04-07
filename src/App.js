
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import CaseCalendar from "./views/CaseCalendar";

function App() {
  const [activeView, setActiveView] = useState("calendar");

  const renderView = () => {
    switch (activeView) {
      case "calendar":
        return <CaseCalendar />;
      case "clients":
        return <div className="p-4">[Clients View Placeholder]</div>;
      case "cases":
        return <div className="p-4">[Cases View Placeholder]</div>;
      default:
        return <div className="p-4">Select a view from the sidebar</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActiveView={setActiveView} />
      <main className="flex-1 bg-gray-100 overflow-auto">{renderView()}</main>
    </div>
  );
}

export default App;
