import React, { useState } from "react";

const AddCaseModal = ({ onSave, onClose }) => {
  const [caseData, setCaseData] = useState({
    intakeDate: "",
    title: "",
    client: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    court: "",
    branch: "",
    docketNumber: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...caseData, lastUpdated: new Date().toISOString() });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-lg font-bold mb-4">Add New Case</h2>
        {[
          ["intakeDate", "Intake Date"],
          ["title", "Case Title"],
          ["client", "Client Name"],
          ["contactPerson", "Contact Person"],
          ["email", "Email Address"],
          ["phone", "Phone Number"],
          ["address", "Address"],
          ["court", "Court"],
          ["branch", "Branch"],
          ["docketNumber", "Docket Number"],
        ].map(([name, placeholder]) => (
          <input
            key={name}
            type="text"
            name={name}
            placeholder={placeholder}
            value={caseData[name]}
            onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
        ))}
        <select
          name="status"
          value={caseData.status}
          onChange={handleChange}
          className="mb-4 p-2 border rounded w-full"
        >
          <option>Pending</option>
          <option>Active</option>
          <option>Appealed</option>
          <option>Closed</option>
        </select>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCaseModal;
