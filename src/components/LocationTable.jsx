import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSideBar";
import LocationEditModal from "./LocationEditModal";

const LocationTable = () => {
  const { state } = useLocation();
  const [locations, setLocations] = useState(state?.locations || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedLocation, setEditedLocation] = useState("");

  const handleEdit = (index) => {
    setIsModalOpen(true);
    setEditIndex(index);
    setEditedLocation(locations[index]); // Set the location name for editing
  };

  const handleDelete = (index) => {
    setLocations((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const updatedLocations = [...locations];
    updatedLocations[editIndex] = editedLocation;
    setLocations(updatedLocations);
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex h-screen bg-gray-900 text-black">
        <AdminSidebar />

        <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
          <div className="text-black">
            <h1 className="text-2xl font-semibold mt-10 lg:mt-0">Locations</h1>
          </div>

          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Sl.No</th>
                <th className="border border-gray-300 px-4 py-2">Location</th>
                <th className="border border-gray-300 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {locations.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center text-gray-500 py-4">
                    No Data
                  </td>
                </tr>
              ) : (
                locations.map((location, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {location}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-green-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render the EditLocationModal component */}
      <LocationEditModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        editedLocation={editedLocation}
        setEditedLocation={setEditedLocation}
        handleSave={handleSave}
      />
    </div>
  );
};

export default LocationTable;
