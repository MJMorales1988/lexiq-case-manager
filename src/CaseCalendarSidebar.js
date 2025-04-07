import React from "react";

export default function CaseCalendarSidebar({ hearings }) {
  return (
    <aside className="w-72 bg-white p-4 shadow-lg border-l border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-[#14919F]">Case Calendar</h3>
      {hearings?.length > 0 ? (
        <ul className="space-y-3">
          {hearings.map((event, index) => (
            <li key={index} className="p-3 bg-gray-50 rounded-lg shadow-sm border">
              <div className="font-semibold text-gray-800">{event.title}</div>
              <div className="text-sm text-gray-600">{new Date(event.date).toLocaleString()}</div>
              <div className="text-sm text-gray-500">{event.location}</div>
              <div className="text-xs text-gray-400 italic">{event.notes}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No events scheduled.</p>
      )}
    </aside>
  );
}
