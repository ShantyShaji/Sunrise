import React, { useState } from 'react';
import AdminSidebar from './AdminSideBar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AddRateCardModal from './AddRateCardModal'; // Import the modal component
import RateCardTable from './RateCardTable';

const Contract = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  // Handle navigation to the AddContract page
  const handleAddContract = () => {
    navigate('/add-contract'); // Navigate to the AddContract page
  };

  // Handle navigation to the Active Contracts page
  const handleActiveContracts = () => {
    navigate('/active-contracts'); // Navigate to the Active Contracts page
  };

  // Handle navigation to the Expired Contracts page
  const handleExpiredContracts = () => {
    navigate('/expired-contracts'); // Navigate to the Expired Contracts page
  };

  // Handle navigation to the Expired Soon Contracts page
  const handleExpiredSoonContracts = () => {
    navigate('/expiredsoon-contracts'); // Navigate to the Expired Soon Contracts page
  };

  // Handle navigation to the RateCardTable page (when View RateCard is clicked)
  const handleViewRateCard = () => {
    navigate('/ratecardtable'); // Navigate to the RateCardTable page
  };

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [rateCards, setRateCards] = useState([]);
 

  // Function to handle adding a new rate card
  const addRateCard = (rateCard) => {
    setRateCards((prevCards) => [
      ...prevCards,
      { id: Date.now(), name: rateCard.rateCardName, type: rateCard.opexCapex },
    ]);
  };

  // Function to handle editing a rate card (you can extend this functionality)
  const handleEdit = (id) => {
    console.log('Editing rate card with id:', id);
  };

  // Function to handle deleting a rate card
  const handleDelete = (id) => {
    setRateCards(rateCards.filter((card) => card.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-900 text-black">
      <AdminSidebar />

      <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
        <div className="text-black">
          {/* <h1 className="text-2xl font-semibold mt-10 lg:mt-0">C</h1> */}
        </div>
        <div>
          {/* Client Section */}
          <h3 className="my-7 text-lg font-semibold text-blue-600">Contract</h3>
          <div className="flex items-start justify-start gap-10">
            {/* Add Contract */}
            <div
              onClick={handleAddContract} // Trigger navigation
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center gap-5 bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">Add Contract</h3>
              <img src="/add_contract.png" alt="Add Contract Icon" className="w-10 h-10" />
            </div>
            {/* Active Contract */}
            <div
              onClick={handleActiveContracts} // Trigger navigation to Active Contracts
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">Active</h3>
              <img src="/active_contract.png" alt="Active Contracts Icon" className="w-10 h-10" />
            </div>
            <div
              onClick={handleExpiredContracts}
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center bg-gray-100 hover:shadow-lg">
              <h3 className="text-base">Expired</h3>
              <img src="/expired.png" alt="View Clients Icon" className="w-10 h-10" />
            </div>
            <div
              onClick={handleExpiredSoonContracts}
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center gap-5 bg-gray-100 hover:shadow-lg">
              <h3 className="text-base">Expired Soon</h3>
              <img src="/expired-soon.png" alt="View Clients Icon" className="w-10 h-10" />
            </div>
          </div>

          {/* Location Section */}
          <h3 className="my-7 text-lg font-semibold text-blue-600">Rate Card</h3>
          <div className="flex items-start justify-start gap-10">
            {/* Add RateCard */}
            <div
              onClick={openModal} // Trigger modal to open
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center gap-5 bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">Add RateCard</h3>
              <img src="/add_card.png" alt="Add RateCard Icon" className="w-10 h-10" />
            </div>
            {/* View RateCard */}
            <div
              onClick={handleViewRateCard} // Trigger navigation to RateCardTable
              className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center bg-gray-100 hover:shadow-lg"
            >
              <h3 className="text-base">View RateCard</h3>
              <img src="/view_cards.png" alt="View RateCards Icon" className="w-10 h-10" />
            </div>
          </div>

          {/* Rate Card Items Section */}
          <h3 className="my-7 text-lg font-semibold text-blue-600">Rate Card Items</h3>
          <div className="flex items-start justify-start gap-10">
            {/* Add Rate Card Item */}
            <div className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center gap-5 bg-gray-100 hover:shadow-lg">
              <h3 className="text-base">Add Rate Card Item</h3>
              <img src="/add_location.png" alt="Add Rate Card Item Icon" className="w-10 h-10" />
            </div>
            {/* View Rate Card Items */}
            <div className="w-52 h-40 cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center bg-gray-100 hover:shadow-lg">
              <h3 className="text-base">View Rate Card Items</h3>
              <img src="/view_location.png" alt="View Rate Card Items Icon" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <AddRateCardModal closeModal={closeModal}
        addRateCard={addRateCard} />
      )}

      {/* Render the RateCardTable */}
      <RateCardTable
        rateCards={rateCards}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Contract;
