import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSideBar";
import EditModal from "./ClientEditModal"; // Import the EditModal component

const ClientTable = ({ clients, handleDelete }) => {
  const location = useLocation();
  const locationClients = location.state?.clients || [];

  // If there are no clients from location, use the prop clients
  const displayClients = locationClients.length > 0 ? locationClients : clients;

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedClient, setSelectedClient] = useState(null); // State for the client being edited
  const [clientList, setClientList] = useState(displayClients); // State to manage the client list

  const handleEdit = (client) => {
    setSelectedClient(client); // Set the selected client
    setIsModalOpen(true); // Open the modal
  };

  const handleSave = (updatedClient) => {
    // Update the client data (replace the old client with the updated data)
    const updatedClients = clientList.map((client) =>
      client.clientName === selectedClient.clientName ? updatedClient : client
    );
    setClientList(updatedClients); // Update the state with the updated client data
    setIsModalOpen(false); // Close the modal after saving
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal without saving
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex h-screen bg-gray-900 text-black">
        <AdminSidebar />

        <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
          <div className="text-black">
            <h1 className="text-2xl font-semibold mt-10 lg:mt-0">Clients</h1>
          </div>
          <table className="min-w-full border-collapse border border-gray-300 overflow-x-scroll mt-5">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Sl.No</th>
                <th className="border border-gray-300 px-4 py-2">Client Name</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Terms & Condition</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {clientList.map((client, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {client.clientName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {client.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {client.termsAndConditions}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(client)}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render the EditModal if it's open */}
      {isModalOpen && (
        <EditModal
          client={selectedClient}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ClientTable;
