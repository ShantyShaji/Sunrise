import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StaffList = ({ onEditClick }) => {
  const staffList = useSelector((state) => state.userManagement.staffList);
  return (
    <div className="bg-gray-100 mt-8 p-6 rounded-md">
      <h2 className="text-lg font-bold text-blue-700 mb-4">Total Staff List</h2>
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
              <tr key={index} className="text-black">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{staff.staffName}</td>
                <td className="p-2 border">{staff.role}</td>
                <td className="p-2 border">{staff.dateOfRegistration}</td>

                <td className="flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-0 p-2 border">
                  <Link
                          to="/user-rights"
                        
                        >
                         <button  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                    User Rights
                  </button>
                  </Link>
                  
                  <button  onClick={() => onEditClick(staff)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 ml-2">
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

export default StaffList;
