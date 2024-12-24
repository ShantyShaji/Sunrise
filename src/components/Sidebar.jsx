import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Import menu and close icons
import { Link } from "react-router-dom"; // Import Link for navigation
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close state
  };
  

  return (
    <>
      {/* Button to open sidebar on mobile */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="md:hidden text-black text-3xl absolute top-6 left-6"
        >
          <RiMenuLine />
        </button>
      )}
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-t from-indigo-500 ... p-6 w-64 h-screen fixed  z-50 md:relative md:block ${isOpen ? "block" : "hidden md:block"}`}
      >
        <div className="flex items-center mb-8 justify-between lg:justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <img src="https://via.placeholder.com/50" alt="Logo" className="mr-4" />
            <span className="text-2xl font-bold text-white">TrackZen</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white text-3xl block md:hidden ml-16"
          >
            <RiCloseLine />
          </button>
        </div>
        <nav className="h-[80vh] flex flex-col justify-between">
          <div>
            <Link to="/dashboard" className="flex items-center space-x-4 my-2 text-white">
              <i className="ri-dashboard-line text-2xl"></i>
              <span>Dashboard</span>
            </Link>
            <Link
              to="/company-management"
              className="flex items-center space-x-4 my-2 text-white"
            >
              <i className="ri-building-line text-2xl"></i>
              <span>Company Management</span>
            </Link>
            <Link to="/user-management" className="flex items-center space-x-4 my-2 text-white">
              <i className="ri-group-line text-2xl"></i>
              <span>User Management</span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/profile_pic.jpg" alt="" className="w-[85px] h-[85px] rounded-full object-cover" />
            <p className="text-[1rem] font-semibold">SuperAdmin</p>
            <p className="text-[0.8rem]">superadmin123@gmail.com</p>
            <CiSettings className="text-xl"/>
          <Link to="/logout" className="flex items-center space-x-4 my-2 text-white">
            <i className="ri-logout-box-line text-2xl"></i>
            <span>Logout</span>
          </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
