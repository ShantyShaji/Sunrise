// EditLocationModal.jsx
import React from 'react';

const LocationEditModal = ({
  isModalOpen,
  setIsModalOpen,
  editedLocation,
  setEditedLocation,
  handleSave
}) => {
  if (!isModalOpen) return null; // If modal is not open, don't render anything

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl font-semibold mb-4">Edit Location</h2>
        <input
          type="text"
          value={editedLocation}
          onChange={(e) => setEditedLocation(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationEditModal;
