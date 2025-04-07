import React, { useState } from "react";

const AddCaseModal = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Add New Case</h2>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            value={formData[key]}
            placeholder={key.replace(/([A-Z])/g, " $1")}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
        ))}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-teal-700 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCaseModal;
