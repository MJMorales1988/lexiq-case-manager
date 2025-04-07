import { useState } from "react";

export default function AddCaseModal({ isOpen, onClose, onSave }) {
  const [newCase, setNewCase] = useState({
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
    lastUpdated: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  });

  const handleChange = (e) => {
    setNewCase({ ...newCase, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(newCase);
    onClose();
    setNewCase({
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
      lastUpdated: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Add New Case</h2>

        <input name="intakeDate" value={newCase.intakeDate} onChange={handleChange} type="date" className="w-full p-2 border mb-2 rounded" />
        <input name="title" value={newCase.title} onChange={handleChange} placeholder="Case Title" className="w-full p-2 border mb-2 rounded" />
        <input name="client" value={newCase.client} onChange={handleChange} placeholder="Client Name" className="w-full p-2 border mb-2 rounded" />
        <input name="contactPerson" value={newCase.contactPerson} onChange={handleChange} placeholder="Contact Person" className="w-full p-2 border mb-2 rounded" />
        <input name="email" value={newCase.email} onChange={handleChange} placeholder="Email Address" className="w-full p-2 border mb-2 rounded" />
        <input name="phone" value={newCase.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border mb-2 rounded" />
        <input name="address" value={newCase.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border mb-2 rounded" />
        <input name="court" value={newCase.court} onChange={handleChange} placeholder="Court" className="w-full p-2 border mb-2 rounded" />
        <input name="branch" value={newCase.branch} onChange={handleChange} placeholder="Branch" className="w-full p-2 border mb-2 rounded" />
        <input name="docketNumber" value={newCase.docketNumber} onChange={handleChange} placeholder="Docket Number" className="w-full p-2 border mb-2 rounded" />

        <select name="status" value={newCase.status} onChange={handleChange} className="w-full p-2 border mb-4 rounded">
          <option value="Pending">Pending</option>
          <option value="Active">Active</option>
          <option value="Appealed">Appealed</option>
          <option value="Closed">Closed</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-[#14919F] text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
