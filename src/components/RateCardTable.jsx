import React from 'react';

const RateCardTable = ({ rateCards, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Sl.No</th>
            <th className="px-4 py-2 border">Rate Card Name</th>
            <th className="px-4 py-2 border">Opex Or Capex</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {rateCards.map((card, index) => (
            <tr key={card.id}>
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{card.name}</td>
              <td className="px-4 py-2 border">{card.type}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => onEdit(card.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(card.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RateCardTable;
