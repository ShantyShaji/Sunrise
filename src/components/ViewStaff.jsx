import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";


const ViewStaff = ({ companyId }) => {
  // Example state for staff members, replace with actual API call if necessary
  const [staffList, setStaffList] = useState([]);
  const [userRights, setUserRights] = useState({
    canEdit: true,
    canDelete: true,
  });

  // Sample staff data, you can replace this with actual data from an API
  useEffect(() => {
    const fetchedStaffData = [
      { id: 1, name: "John Doe", role: "Nurse", registrationDate: "2023-01-15" },
      { id: 2, name: "Jane Smith", role: "Admin", registrationDate: "2022-07-21" },
      { id: 3, name: "David Johnson", role: "Nurse", registrationDate: "2023-03-01" },
    ];

    setStaffList(fetchedStaffData); // Replace with your actual data-fetching logic
  }, [companyId]);

  const handleEdit = (staffId) => {
    // Handle the edit action (open a modal or navigate to an edit page)
    console.log(`Edit staff with ID: ${staffId}`);
  };

  const handleDelete = (staffId) => {
    // Handle the delete action (show confirmation or delete from API)
    console.log(`Delete staff with ID: ${staffId}`);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
    <Sidebar />
    <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
    <div className=" mt-8 p-6 rounded-md">
      <h2 className="text-lg font-bold text-blue-700 mb-4">Staff List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white text-sm text-left">
          <thead>
            <tr className="bg-blue-200 text-gray-700">
              <th className="p-2 border">Sl.No</th>
              <th className="p-2 border">Staff Name</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Date Of Registration</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff, index) => (
              <tr key={staff.id} className="text-black">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{staff.name}</td>
                <td className="p-2 border">{staff.role}</td>
                <td className="p-2 border">{staff.registrationDate}</td>
                <td className="flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-0 p-2 border">
                <Link
        to="/user-rights"
        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 inline-block"
      >
        User Rights
      </Link>
                  {userRights.canEdit && (
                    <button
                      onClick={() => handleEdit(staff.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 ml-2"
                    >
                      Edit
                    </button>
                  )}
                  {userRights.canDelete && (
                    <button
                      onClick={() => handleDelete(staff.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ViewStaff;