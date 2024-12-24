import React, { useState } from "react";

const EditModal = ({ client, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    clientName: client.clientName,
    address: client.address,
    termsAndConditions: client.termsAndConditions,
    paymentTerms: client. paymentTerms,
    attention: client. attention,

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the updated data
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Client</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
  <label className="block text-gray-700">Terms & Conditions</label>
  <select
    name="termsAndConditions"
    value={formData.termsAndConditions}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
    required
  >
    <option value="">Select Terms & Conditions</option>
    <option value="Term1">Term 1</option>
    <option value="Term2">Term 2</option>
    <option value="Term3">Term 3</option>
    {/* Add more options as needed */}
  </select>
</div>

<div className="mb-4">
  <label className="block text-gray-700">Payment Term</label>
  <select
    name="paymentTerm"
    value={formData.paymentTerm}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
    required
  >
    <option value="">Select Payment Term</option>
    <option value="Net30">Net 30</option>
    <option value="Net60">Net 60</option>
    <option value="Immediate">Immediate</option>
    {/* Add more options as needed */}
  </select>
</div>

          <div className="mb-4">
            <label className="block text-gray-700">Attention</label>
            <input
              type="text"
              name="termsAndConditions"
              value={formData.attention}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
