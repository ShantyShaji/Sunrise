import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSideBar";
import AddClientModal from "./AddClientModal";
import AddLocationModal from "./AddLocationModal";

const ClientLocation = () => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  const handleAddClient = (clientData) => {
    setClients((prevClients) => [...prevClients, clientData]);
    setIsClientModalOpen(false);
  };

  const handleAddLocation = (locationData) => {
    setLocations((prevLocations) => [...prevLocations, locationData]);
    setIsLocationModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-black">
      <AdminSidebar />
      <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
        <div className="text-black">
          <h1 className="text-2xl font-semibold mt-10 lg:mt-0">Client/Location</h1>
        </div>
        <div>
          {/* Client Section */}
          <h3 className="my-7 text-lg font-semibold text-blue-600">Client</h3>
          <div className="flex items-start justify-start gap-10">
            {/* Add Client */}
            <div
              onClick={() => setIsClientModalOpen(true)}
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center gap-5 bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">Add Client</h3>
              <img src="/add.png" alt="Add Client Icon" className="w-10 h-10" />
            </div>
            {/* View Clients */}
            <div
              onClick={() => navigate("/clients", { state: { clients } })}
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">View Clients</h3>
              <h3 className="text-lg">{clients.length}</h3>
              <img src="/visible.png" alt="View Clients Icon" className="w-10 h-10" />
            </div>
          </div>

          {/* Location Section */}
          <h3 className="my-7 text-lg font-semibold text-blue-600">Location</h3>
          <div className="flex items-start justify-start gap-10">
            {/* Add Location */}
            <div
              onClick={() => setIsLocationModalOpen(true)}
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center gap-5 bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">Add Location</h3>
              <img
                src="/add _location.png"
                alt="Add Location Icon"
                className="w-10 h-10"
              />
            </div>
            {/* View Locations */}
            <div
              onClick={() => navigate("/locations", { state: { locations } })}
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">View Locations</h3>
              <h3 className="text-lg">{locations.length}</h3>
              <img
                src="/view_location.png"
                alt="View Locations Icon"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>

        {/* Add Client Modal */}
        {isClientModalOpen && (
          <AddClientModal
            isOpen={isClientModalOpen}
            handleClose={() => setIsClientModalOpen(false)}
            handleAddClient={handleAddClient}
          />
        )}

        {/* Add Location Modal */}
        {isLocationModalOpen && (
          <AddLocationModal
            isOpen={isLocationModalOpen}
            handleClose={() => setIsLocationModalOpen(false)}
            handleAddLocation={handleAddLocation}
          />
        )}
      </div>
    </div>
  );
};

export default ClientLocation;
