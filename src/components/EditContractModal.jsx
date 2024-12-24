import React, { useState, useEffect } from 'react';

const EditContractModal = ({ isOpen, contract, onClose, onSave }) => {
  const [editedContract, setEditedContract] = useState(contract);

  useEffect(() => {
    if (contract) {
      setEditedContract(contract);
    }
  }, [contract]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContract((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setEditedContract((prev) => ({
      ...prev,
      attachments: selectedFiles,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedContract);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[60vw] h-[80vh] overflow-y-scroll">
        <h3 className="text-lg font-semibold mb-4">Edit Contract</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="contractNo" className="block text-sm font-medium text-gray-700">Contract No.</label>
            <input
              type="text"
              id="contractNo"
              name="contractNo"
              value={editedContract.contractNo}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client</label>
            <input
              type="text"
              id="client"
              name="client"
              value={editedContract.client}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={editedContract.location}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rateCard" className="block text-sm font-medium text-gray-700">Rate Card</label>
            <input
              type="text"
              id="rateCard"
              name="rateCard"
              value={editedContract.rateCard}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="validFrom" className="block text-sm font-medium text-gray-700">Valid From</label>
            <input
              type="date"
              id="validFrom"
              name="validFrom"
              value={editedContract.validFrom}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="validTo" className="block text-sm font-medium text-gray-700">Valid To</label>
            <input
              type="date"
              id="validTo"
              name="validTo"
              value={editedContract.validTo}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="files" className="block text-sm font-medium text-gray-700">Attachments</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            <ul className="mt-2">
              {editedContract.attachments && editedContract.attachments.length > 0 &&
                editedContract.attachments.map((file, index) => (
                  <li key={index} className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">{file.name}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white p-2 rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContractModal;
