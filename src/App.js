import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import CaseCalendar from "./views/CaseCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const App = () => {
  const [activeView, setActiveView] = useState("calendar");
  const [selectedCase, setSelectedCase] = useState(null);

  const renderView = () => {
    switch (activeView) {
      case "calendar":
        return (
          <CaseCalendar
            selectedCase={selectedCase}
            setSelectedCase={setSelectedCase}
          />
        );
      default:
        return <div className="p-4">Other views not implemented.</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActiveView={setActiveView} setSelectedCase={setSelectedCase} />
      <div className="flex-1 bg-gray-100 overflow-auto">{renderView()}</div>
    </div>
  );
};

export default App;