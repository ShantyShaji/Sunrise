import React, { useState } from 'react';
import AdminSidebar from './AdminSideBar';
import ContractTable from './ContractTable'; // Import the ContractTable component
import EditContractModal from './EditContractModal';

const AddContract = () => {
  const [contracts, setContracts] = useState([]);
  const [contractNo, setContractNo] = useState('');
  const [client, setClient] = useState('');
  const [location, setLocation] = useState('');
  const [rateCard, setRateCard] = useState('');
  const [validFrom, setValidFrom] = useState('');
  const [validTo, setValidTo] = useState('');
  const [files, setFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [contractToEdit, setContractToEdit] = useState(null); // Contract data to edit

  const handleAddContract = (e) => {
    e.preventDefault();

    // Check if the form is filled
    if (contractNo && client && location && rateCard) {
      // Add new contract to the table
      const newContract = {
        contractNo,
        client,
        location,
        rateCard,
        validFrom,
        validTo,
        attachments: files,
      };
      setContracts([...contracts, newContract]);

      // Clear the form after submitting
      setContractNo('');
      setClient('');
      setLocation('');
      setRateCard('');
      setValidFrom('');
      setValidTo('');
      setFiles([]);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    e.target.value = ""; // Reset the input field value
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleEditContract = (contract) => {
    setContractToEdit(contract); // Set the contract data to edit
    setIsModalOpen(true); // Open the modal
  };

  const handleSaveEdit = (updatedContract) => {
    const updatedContracts = contracts.map((contract) =>
      contract.contractNo === updatedContract.contractNo ? updatedContract : contract
    );
    setContracts(updatedContracts);
    setIsModalOpen(false);
    setContractToEdit(null); // Reset the contract data after saving
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContractToEdit(null); // Reset the contract data
  };

  return (
    <div className="flex h-screen bg-gray-900 text-black">
      <AdminSidebar />

      <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
        <div className="text-black">
          <h3 className="my-7 text-lg font-semibold text-blue-600">Contract</h3>

          {/* Contract Form */}
          <form onSubmit={handleAddContract} className="mb-6">
            <div className="mb-4">
              <label htmlFor="contractNo" className="block text-sm font-medium text-gray-700">Contract No</label>
              <input
                type="text"
                id="contractNo"
                name="contractNo"
                value={contractNo}
                onChange={(e) => setContractNo(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client</label>
              <select
                id="client"
                name="client"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              >
                <option value="">Select Client</option>
                <option value="client1">Client 1</option>
                <option value="client2">Client 2</option>
                <option value="client3">Client 3</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <select
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              >
                <option value="">Select Location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="rateCard" className="block text-sm font-medium text-gray-700">Rate Card</label>
              <select
                id="rateCard"
                name="rateCard"
                value={rateCard}
                onChange={(e) => setRateCard(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              >
                <option value="">Select Rate Card</option>
                <option value="rate1">Rate Card 1</option>
                <option value="rate2">Rate Card 2</option>
                <option value="rate3">Rate Card 3</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="validFrom" className="block text-sm font-medium text-gray-700">Valid From</label>
              <input
                type="date"
                id="validFrom"
                name="validFrom"
                value={validFrom}
                onChange={(e) => setValidFrom(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="validTo" className="block text-sm font-medium text-gray-700">Valid To</label>
              <input
                type="date"
                id="validTo"
                name="validTo"
                value={validTo}
                onChange={(e) => setValidTo(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Attachments</label>
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
              <ul className="mt-2">
                {files.map((file, index) => (
                  <li key={index} className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="text-red-600 font-bold"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded"
              >
                Add Contract
              </button>
            </div>
          </form>

          {/* Display Contract Table */}
          <ContractTable contracts={contracts} onEdit={handleEditContract} />

          {/* Edit Contract Modal */}
          {isModalOpen && (
            <EditContractModal
              isOpen={isModalOpen}
              contract={contractToEdit}
              onClose={handleCloseModal}
              onSave={handleSaveEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddContract;
