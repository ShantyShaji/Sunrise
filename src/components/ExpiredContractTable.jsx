import React from 'react';
import AdminSidebar from './AdminSideBar';

const ExpiredContractTable = ({ contracts }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-black">
      <AdminSidebar />
      <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
        <div className="text-black">
          <h1 className="text-2xl font-semibold mt-10 lg:mt-0">Expired Contracts</h1>
        </div>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="py-2 px-4">Sl No</th>
                <th className="py-2 px-4">Contract No</th>
                <th className="py-2 px-4">Client</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Valid Till</th>
              </tr>
            </thead>
            <tbody>
              {contracts && contracts.length > 0 ? (
                contracts.map((contract, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{contract.contractNo}</td>
                    <td className="py-2 px-4">{contract.client}</td>
                    <td className="py-2 px-4">{contract.location}</td>
                    <td className="py-2 px-4">{contract.validTo}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">No active contracts found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpiredContractTable;
