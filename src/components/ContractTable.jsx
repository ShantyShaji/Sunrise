 // ContractTable.jsx
import React from 'react';

const ContractTable = ({ contracts, onEdit }) => {
  if (contracts.length === 0) {
    return <p>No Data Available</p>;
  }

  return (
    <table className="min-w-full table-auto border-collapse mt-6">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 border border-gray-300">Contract No.</th>
          <th className="px-4 py-2 border border-gray-300">Client</th>
          <th className="px-4 py-2 border border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border border-gray-300 text-center">{contract.contractNo}</td>
            <td className="px-4 py-2 border border-gray-300 text-center">{contract.client}</td>
            <td className="px-4 py-2 border border-gray-300 text-center">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => onEdit(contract)} // Trigger the onEdit handler when clicking edit
              >
                Edit
              </button>
              <button className="ml-2 text-red-500 hover:text-red-700">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContractTable;
