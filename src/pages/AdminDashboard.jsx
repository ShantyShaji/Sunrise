import React from "react";
import Sidebar from "../components/Sidebar";
import CompanyCards from "../components/CompanyCards";
import AdminSidebar from "../components/AdminSideBar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <AdminSidebar/>

      {/* Main Content */}
      <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0 lg:items-center my-6">
          <div className="flex items-center space-x-4">
            <span className="text-2xl lg:text-3xl text-black font-semibold mt-5 g:mt-0">
              Admin Cards
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[200px] md:w-[300px] text-black"
            />
            <svg
              className="absolute right-2 top-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Cards Section */}
        <CompanyCards />
      </div>
    </div>
  );
};

export default AdminDashboard;
