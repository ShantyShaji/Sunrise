import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  addStaff  } from "../Redux/Slices/SuperAdmin/UserManagementSlice";
import CompanyList from "./CompanyList";
import Sidebar from "./Sidebar";
import EditCompanyModal from "./EditCompanyModal";
import StaffList from "./StaffList";
import EditStaffModal from "./EditStaffModal";

const UserManagement = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null); // Store the company to edit

    const [formData, setFormData] = useState({
        staffName: "",
            abbreviation: "",
            companyName: "",
            role: "",
            username: "",
            password: "",
            dateOfRegistration: "",
            phoneNumber: "",
            photo: null,
            photoPreview: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    photo: file,
                    photoPreview: reader.result, // Store Base64 string for preview
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Create a unique ID for each staff
        const newStaff = {
          id: Date.now(),
          ...formData,
        };
      
        // Dispatch the addStaff action
        dispatch(addStaff(newStaff));
      
        // Clear the form
        setFormData({
          staffName: "",
          abbreviation: "",
          companyName: "",
          role: "",
          username: "",
          password: "",
          dateOfRegistration: "",
          phoneNumber: "",
          photo: null,
          photoPreview: "",
        });
      };

      const handleEditClick = (staff) => {
        setSelectedCompany(staff); // Set the selected staff data for editing
        setIsModalOpen(true);
    };

    const handleUpdate = (updatedCompany) => {
        // Dispatch update action to update the company data
        dispatch(updateCompany(updatedCompany));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
                <div className="shadow-md p-6 rounded-md">
                    <h2 className="text-lg font-bold text-blue-700 mb-4">Add Staff</h2>                  
                  <form className="space-y-4" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Staff Name:</label>
                                <input
                                    type="text"
                                    name="staffName"
                                    value={formData.staffName}
                                    onChange={handleChange}
                                    placeholder="Staff Name"
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Abbreviation:</label>
                                <input
                                    type="text"
                                    name="abbreviation"
                                    value={formData.abbreviation}
                                    onChange={handleChange}
                                    placeholder="Abbreviation"
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            </div>
                            <div>
                            <label className="block text-gray-700 mb-1">Company Name:</label>
                            <select
    name="companyName"
    value={formData.companyName}
    onChange={handleChange}
    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
>
<option disabled value="">
            Select
          </option>
          <option>#TESTING COMP</option>
          <option>Alfan</option>
          <option>Demo</option>
          <option>HSTC</option>
          <option>Modal Testing</option>
          <option>New Company</option>
          <option>New Test</option>
          <option>New Test Company</option>
          <option>Sunrise</option>
          <option>TECH@1</option>
          <option>Test</option>
          <option>Test 1</option>
          <option>Test New</option>
</select>

                        </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                                <label className="block text-gray-700 mb-1">Role:</label>
                                <select
    name="role"
    value={formData.role}
    onChange={handleChange}
    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
>
    <option value="" disabled>Select</option>
    <option value="Admin">Admin</option>
    <option value="Staff">Staff</option>
    <option value="Sales Person">Sales Person</option>
   
</select>

                            </div> 
                            
                        <div>
                                <label className="block text-gray-700 mb-1">UserName:</label>
                                <input
                                    type="email"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Enter UserName"
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            </div>
                            
                        <div>
                                <label className="block text-gray-700 mb-1">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter Password"
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                                <label className="block text-gray-700 mb-1">Date Of Registration:</label>
                                <input
                                    type="date"
                                    name="dateOfRegistration"
                                    value={formData.dateOfRegistration}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Phone Number:</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Photo:</label>
                                <input
                                    type="file"
                                    name="photo"
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 bg-white text-gray-700 text-black"
                                />
                                {formData.photoPreview && (
                                    <img
                                        src={formData.photoPreview}
                                        alt="photo Preview"
                                        className="mt-2 w-20 h-20 object-cover border"
                                    />
                                )}
                            </div>
                            
                        </div>
                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button>
                            <button
                                type="reset"
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>

                <StaffList onEditClick={handleEditClick} />
                
            </div>
             {/* Edit Company Modal */}
             <EditStaffModal
    isOpen={isModalOpen}
    staffData={selectedCompany}  // This should be the staff object
    handleClose={handleCloseModal}
    handleUpdate={handleUpdate}
/>
           
        </div>
    );
};

export default UserManagement;


 