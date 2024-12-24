// import React, { useState } from "react";

// const UserRights = () => {
//   // Sample data for table rows
//   const pages = [
//     { id: 1, name: "Dashboard" },
//     { id: 2, name: "User Management" },
//     { id: 3, name: "Reports" },
//     { id: 4, name: "Settings" },
//     { id: 5, name: "Dashboard" },
//     { id: 6, name: "User Management" },
//     { id: 7, name: "Reports" },
//     { id: 8, name: "Settings" },
//     { id: 9, name: "Dashboard" },
//     { id: 10, name: "User Management" },
//     { id: 11, name: "Reports" },
//     { id: 12, name: "Settings" },
//     { id: 13, name: "Dashboard" },
//     { id: 14, name: "User Management" },
//     { id: 15, name: "Reports" },
//     { id: 16, name: "Settings" },
//     { id: 17, name: "Dashboard" },
//     { id: 18, name: "User Management" },
//     { id: 19, name: "Reports" },
//     { id: 20, name: "Settings" },
//     { id: 21, name: "Dashboard" },
//     { id: 22, name: "User Management" },
//     { id: 23, name: "Reports" },
//     { id: 24, name: "Settings" },
//     { id: 25, name: "Dashboard" },
//     { id: 26, name: "User Management" },
//     { id: 27, name: "Reports" },
//     { id: 28, name: "Settings" },
//     { id: 29, name: "Dashboard" },
//     { id: 30, name: "User Management" },
//     { id: 31, name: "Reports" },
//     { id: 32, name: "Settings" },
//     { id: 33, name: "Dashboard" },
//     { id: 34, name: "User Management" },
//     { id: 35, name: "Reports" },
//     { id: 36, name: "Settings" },
//     { id: 37, name: "Dashboard" },
//     { id: 38, name: "User Management" },
//     { id: 39, name: "Reports" },
//     { id: 40, name: "Settings" },
//     { id: 41, name: "Dashboard" },
//     { id: 42, name: "User Management" },
//     { id: 43, name: "Reports" },
//     { id: 44, name: "Settings" },
//     { id: 45, name: "Dashboard" },
//     { id: 46, name: "User Management" },
//     { id: 46, name: "Reports" },
//     { id: 47, name: "Settings" },
//     { id: 48, name: "Dashboard" },
//     { id: 49, name: "User Management" },
//     { id: 50, name: "Reports" },
//     { id: 51, name: "Settings" },
//     { id: 52, name: "Dashboard" },
//     { id: 53, name: "User Management" },
//     { id: 54, name: "Reports" },
//     { id: 55, name: "Settings" },
//     { id: 56, name: "Dashboard" },
//     { id: 57, name: "User Management" },
//     { id: 58, name: "Reports" },
//     { id: 59, name: "Settings" },
//     { id: 60, name: "Dashboard" },
//     { id: 61, name: "User Management" },
//     { id: 62, name: "Reports" },
//     { id: 63, name: "Settings" },
//     { id: 64, name: "Dashboard" },
//     { id: 65, name: "User Management" },
//     { id: 66, name: "Reports" },
//     { id: 67, name: "Settings" },
//   ];

//   // State to track selected checkboxes
//   const [selected, setSelected] = useState([]);

//   // Handler for Select All checkbox
//   const handleSelectAll = (event) => {
//     if (event.target.checked) {
//       setSelected(pages.map((page) => page.id));
//     } else {
//       setSelected([]);
//     }
//   };

//   // Handler for individual checkbox
//   const handleCheckboxChange = (id) => {
//     if (selected.includes(id)) {
//       setSelected(selected.filter((item) => item !== id));
//     } else {
//       setSelected([...selected, id]);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">User Rights</h1>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 p-2">Sl. No</th>
//             <th className="border border-gray-300 p-2">Pages</th>
//             <th className="border border-gray-300 p-2">
//               <input
//                 type="checkbox"
//                 checked={selected.length === pages.length}
//                 onChange={handleSelectAll}
//               />{" "}
//               Select All
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {pages.map((page, index) => (
//             <tr key={page.id}>
//               <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
//               <td className="border border-gray-300 p-2">{page.name}</td>
//               <td className="border border-gray-300 p-2 text-center">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(page.id)}
//                   onChange={() => handleCheckboxChange(page.id)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserRights;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";


const userRights = ({ companyId }) => {
  // Example state for staff members, replace with actual API call if necessary
  const [selected, setSelected] = useState([]);
  // Sample staff data, you can replace this with actual data from an API
  
    const pages = [
        { id: 1, name: "Dashboard" },
        { id: 2, name: "User Management" },
        { id: 3, name: "Reports" },
        { id: 4, name: "Settings" },
        { id: 5, name: "Dashboard" },
        { id: 6, name: "User Management" },
        { id: 7, name: "Reports" },
        { id: 8, name: "Settings" },
        { id: 9, name: "Dashboard" },
        { id: 10, name: "User Management" },
        { id: 11, name: "Reports" },
        { id: 12, name: "Settings" },
        { id: 13, name: "Dashboard" },
        { id: 14, name: "User Management" },
        { id: 15, name: "Reports" },
        { id: 16, name: "Settings" },
        { id: 17, name: "Dashboard" },
        { id: 18, name: "User Management" },
        { id: 19, name: "Reports" },
        { id: 20, name: "Settings" },
        { id: 21, name: "Dashboard" },
        { id: 22, name: "User Management" },
        { id: 23, name: "Reports" },
        { id: 24, name: "Settings" },
        { id: 25, name: "Dashboard" },
        { id: 26, name: "User Management" },
        { id: 27, name: "Reports" },
        { id: 28, name: "Settings" },
        { id: 29, name: "Dashboard" },
        { id: 30, name: "User Management" },
        { id: 31, name: "Reports" },
        { id: 32, name: "Settings" },
        { id: 33, name: "Dashboard" },
        { id: 34, name: "User Management" },
        { id: 35, name: "Reports" },
        { id: 36, name: "Settings" },
        { id: 37, name: "Dashboard" },
        { id: 38, name: "User Management" },
        { id: 39, name: "Reports" },
        { id: 40, name: "Settings" },
        { id: 41, name: "Dashboard" },
        { id: 42, name: "User Management" },
        { id: 43, name: "Reports" },
        { id: 44, name: "Settings" },
        { id: 45, name: "Dashboard" },
        { id: 46, name: "User Management" },
        { id: 46, name: "Reports" },
        { id: 47, name: "Settings" },
        { id: 48, name: "Dashboard" },
        { id: 49, name: "User Management" },
        { id: 50, name: "Reports" },
        { id: 51, name: "Settings" },
        { id: 52, name: "Dashboard" },
        { id: 53, name: "User Management" },
        { id: 54, name: "Reports" },
        { id: 55, name: "Settings" },
        { id: 56, name: "Dashboard" },
        { id: 57, name: "User Management" },
        { id: 58, name: "Reports" },
        { id: 59, name: "Settings" },
        { id: 60, name: "Dashboard" },
        { id: 61, name: "User Management" },
        { id: 62, name: "Reports" },
        { id: 63, name: "Settings" },
        { id: 64, name: "Dashboard" },
        { id: 65, name: "User Management" },
        { id: 66, name: "Reports" },
        { id: 67, name: "Settings" },
      ];
    

   // Handler for Select All checkbox
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(pages.map((page) => page.id));
    } else {
      setSelected([]);
    }
  };

  // Handler for individual checkbox
  const handleCheckboxChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
    <Sidebar />
    <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
    <div className=" mt-8 p-6 rounded-md">
      <h2 className="text-lg font-bold text-blue-700 mb-4">User Rights</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white text-sm text-left">
          <thead>
            <tr className="bg-blue-200 text-gray-700">
              <th className="p-2 border">Sl.No</th>
              <th className="p-2 border">Pages</th>
              <th className="p-2 border flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.length === pages.length}
                onChange={handleSelectAll}
              />{" "}
              Select All
              </th>
            
            </tr>
          </thead>
          <tbody>
          {pages.map((page, index) => (
              <tr key={page.id} className="text-black">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{page.name}</td>
                <td className="p-2 border"> 
                <input
                  type="checkbox"
                  checked={selected.includes(page.id)}
                  onChange={() => handleCheckboxChange(page.id)}
                />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-7"
                        >
                            Save
                        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default userRights;
