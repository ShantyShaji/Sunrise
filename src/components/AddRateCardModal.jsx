import React, { useState } from 'react';

const AddRateCardModal = ({ closeModal, addRateCard }) => {
  const [rateCardName, setRateCardName] = useState('');
  const [client, setClient] = useState('');
  const [location, setLocation] = useState('');
  const [opexCapex, setOpexCapex] = useState('');

  const clients = ['Client A', 'Client B', 'Client C'];
  const locations = ['Location 1', 'Location 2', 'Location 3'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Passing the rate card data back to the parent
    addRateCard({ rateCardName, client, location, opexCapex });
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Add Rate Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="rateCardName" className="block text-sm font-medium text-gray-700">
              Rate Card Name:
            </label>
            <input
              type="text"
              id="rateCardName"
              value={rateCardName}
              onChange={(e) => setRateCardName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="client" className="block text-sm font-medium text-gray-700">
              Client:
            </label>
            <select
              id="client"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Client</option>
              {clients.map((client, index) => (
                <option key={index} value={client}>
                  {client}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location:
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="opexCapex" className="block text-sm font-medium text-gray-700">
              Opex & Capex:
            </label>
            <select
              id="opexCapex"
              value={opexCapex}
              onChange={(e) => setOpexCapex(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Option</option>
              <option value="Applicable">Applicable</option>
              <option value="Not Applicable">Not Applicable</option>
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={closeModal}
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Add Rate Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRateCardModal;
