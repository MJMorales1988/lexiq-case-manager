import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard";
import CalendarView from "./views/CalendarView";

function App() {
  const [activeView, setActiveView] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar setActiveView={setActiveView} />
      <main className="flex-1">
        {activeView === "dashboard" && (
          <Dashboard
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {activeView === "calendar" && <CalendarView />}
        {activeView !== "dashboard" && activeView !== "calendar" && (
          <div className="p-6">
            <h2 className="text-xl font-bold capitalize">{activeView} View</h2>
            <p>This view is under construction.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
