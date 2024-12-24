import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CompanyList = ({ onEditClick }) => {
  const companies = useSelector((state) => state.company.companies);
  return (
    <div className="bg-gray-100 mt-8 p-6 rounded-md">
      <h2 className="text-lg font-bold text-blue-700 mb-4">Company List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white text-sm text-left rounded-3xl">
          <thead>
            <tr className="bg-black text-white ">
              <th className="p-2 border">Sl.No</th>
              <th className="p-2 border">Company Name</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Logo</th>
              <th className="p-2 border">Date Of Registration</th>
              <th className="p-2 border">License Number</th>
              <th className="p-2 border">Staff Management</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className="text-black">
                <td className="p-2 border text-center">{index + 1}</td>
                <td className="p-2 border">{company.companyName}</td>
                <td className="p-2 border">{company.address}</td>
                <td className="p-2 border">{company.description}</td>
                <td className="p-2 border text-center">
                  {company.logoPreview ? (
                    <img
                      src={company.logoPreview}
                      alt={`${company.companyName} Logo`}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Placeholder Logo"
                      className="w-12 h-12 object-contain"
                    />
                  )}
                </td>
                <td className="p-2 border">{company.dateOfRegistration}</td>
                <td className="p-2 border">{company.licenseNumber}</td>
                <td className="p-2 border">
                <Link
        to="/staff/:companyId"
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 inline-block"
      >
        View Staff
      </Link>
                </td>
                <td className="">
                  <button  onClick={() => onEditClick(company)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;


// import React from "react";

// const CompanyList = ({ onEditClick }) => {
//     const companies = [
//         // Dummy data for demonstration
//         { id: 1, companyName: "Company A", address: "Address A", description: "Description A" },
//         { id: 2, companyName: "Company B", address: "Address B", description: "Description B" },
//         // Add other company data
//     ];

//     return (
//         <div>
//             <h2 className="text-lg font-bold text-blue-700 mb-4">Company List</h2>
//             <table className="min-w-full table-auto">
//                 <thead>
//                     <tr>
//                         <th className="border px-4 py-2">Company Name</th>
//                         <th className="border px-4 py-2">Address</th>
//                         <th className="border px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {companies.map((company) => (
//                         <tr key={company.id}>
//                             <td className="border px-4 py-2">{company.companyName}</td>
//                             <td className="border px-4 py-2">{company.address}</td>
//                             <td className="border px-4 py-2">
//                                 <button
//                                     onClick={() => onEditClick(company)}
//                                     className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
//                                 >
//                                     Edit
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default CompanyList;
