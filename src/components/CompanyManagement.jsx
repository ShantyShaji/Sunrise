// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addCompany, updateCompany } from "../Redux/Slices/SuperAdmin/CompanyManagementSlice";
 
// import CompanyList from "./CompanyList";
// import Sidebar from "./Sidebar";
// import EditCompanyModal from "./EditCompanyModal";

// const CompanyManagement = () => {
//     const dispatch = useDispatch();
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedCompany, setSelectedCompany] = useState(null); // Store the company to edit

//     const [formData, setFormData] = useState({
//         companyName: "",
//         address: "",
//         description: "",
//         logo: null, // Keep the File object here temporarily
//         logoPreview: "", // Base64 preview
//         dateOfRegistration: "",
//         licenseNumber: "",
//         phoneNumber: "",
//         abbreviation: "",
//     });

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;

//         if (files) {
//             const file = files[0];
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setFormData((prevData) => ({
//                     ...prevData,
//                     logo: file,
//                     logoPreview: reader.result, // Store Base64 string for preview
//                 }));
//             };
//             reader.readAsDataURL(file);
//         } else {
//             setFormData({
//                 ...formData,
//                 [name]: value,
//             });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Send formData to Redux after excluding non-serializable fields
//         const { logo, logoPreview, ...serializableData } = formData;
//         dispatch(addCompany({ ...serializableData, logoPreview })); // Dispatch Base64 logoPreview
//         setFormData({
//             companyName: "",
//             address: "",
//             description: "",
//             logo: null,
//             logoPreview: "",
//             dateOfRegistration: "",
//             licenseNumber: "",
//             phoneNumber: "",
//             abbreviation: "",
//         });
//     };

//     const handleEditClick = (company) => {
//         setSelectedCompany(company);
//         setIsModalOpen(true);
//     };

//     const handleUpdate = (updatedCompany) => {
//         // Dispatch update action to update the company data
//         dispatch(updateCompany(updatedCompany));
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };


//     return (
//         <div className="flex h-screen bg-gray-900 text-white">
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Main Content */}
//             <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
//                 <div className="shadow-md p-6 rounded-md">
//                     <h2 className="text-lg font-bold text-blue-700 mb-4">Register Company</h2>                  
//                   <form className="space-y-4" onSubmit={handleSubmit}>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-gray-700 mb-1">Company Name:</label>
//                                 <input
//                                     type="text"
//                                     name="companyName"
//                                     value={formData.companyName}
//                                     onChange={handleChange}
//                                     placeholder="Company Name"
//                                     className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 mb-1">Address:</label>
//                                 <input
//                                     type="text"
//                                     name="address"
//                                     value={formData.address}
//                                     onChange={handleChange}
//                                     placeholder="Address"
//                                     className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-gray-700 mb-1">Description:</label>
//                             <textarea
//                                 placeholder="Description"
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
//                             ></textarea>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                             <div>
//                                 <label className="block text-gray-700 mb-1">Logo:</label>
//                                 <input
//                                     type="file"
//                                     name="logo"
//                                     onChange={handleChange}
//                                     className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 bg-white text-gray-700 text-black"
//                                 />
//                                 {formData.logoPreview && (
//                                     <img
//                                         src={formData.logoPreview}
//                                         alt="Logo Preview"
//                                         className="mt-2 w-20 h-20 object-cover border"
//                                     />
//                                 )}
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 mb-1">Date Of Registration:</label>
//                                 <input
//                                     type="date"
//                                     name="dateOfRegistration"
//                                     value={formData.dateOfRegistration}
//                                     onChange={handleChange}
//                                     className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 mb-1">License Number:</label>
//                                 <input
//                                     type="text"
//                                     name="licenseNumber"
//                                     value={formData.licenseNumber}
//                                     onChange={handleChange}
//                                     placeholder="Enter License Number"
//                                     className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-gray-700 mb-1">Phone Number:</label>
//                                 <input
//                                     type="text"
//                                     name="phoneNumber"
//                                     value={formData.phoneNumber}
//                                     onChange={handleChange}
//                                     placeholder="Enter Phone Number"
//                                     className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 mb-1">Abbreviation:</label>
//                                 <input
//                                     type="text"
//                                     name="abbreviation"
//                                     value={formData.abbreviation}
//                                     onChange={handleChange}
//                                     placeholder="Enter Abbreviation"
//                                     className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
//                                 />
//                             </div>
//                         </div>
//                         {/* Buttons */}
//                         <div className="flex space-x-4">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                             >
//                                 Submit
//                             </button>
//                             <button
//                                 type="reset"
//                                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                             >
//                                 Reset
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 <CompanyList onEditClick={handleEditClick} />
//             </div>
//              {/* Edit Company Modal */}
//              <EditCompanyModal
//                 isOpen={isModalOpen}
//                 companyData={selectedCompany}
//                 handleClose={handleCloseModal}
//                 handleUpdate={handleUpdate}
//             />
//         </div>
//     );
// };

// export default CompanyManagement;







import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCompany, updateCompany } from "../Redux/Slices/SuperAdmin/CompanyManagementSlice";
import CompanyList from "./CompanyList";
import Sidebar from "./Sidebar";
import EditCompanyModal from "./EditCompanyModal";

const CompanyManagement = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null); // Store the company to edit

    const [formData, setFormData] = useState({
        companyName: "",
        address: "",
        description: "",
        logo: null, // Keep the File object here temporarily
        logoPreview: "", // Base64 preview
        dateOfRegistration: "",
        licenseNumber: "",
        phoneNumber: "",
        abbreviation: "",
    });

    useEffect(() => {
        if (selectedCompany) {
            setFormData({
                companyName: selectedCompany.companyName || "",
                address: selectedCompany.address || "",
                description: selectedCompany.description || "",
                logo: null,
                logoPreview: selectedCompany.logoPreview || "",
                dateOfRegistration: selectedCompany.dateOfRegistration || "",
                licenseNumber: selectedCompany.licenseNumber || "",
                phoneNumber: selectedCompany.phoneNumber || "",
                abbreviation: selectedCompany.abbreviation || "",
            });
        }
    }, [selectedCompany]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    logo: file,
                    logoPreview: reader.result, // Store Base64 string for preview
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

        // Send formData to Redux after excluding non-serializable fields
        const { logo, logoPreview, ...serializableData } = formData;

        if (selectedCompany) {
            // Update the company
            dispatch(updateCompany({ ...selectedCompany, ...serializableData, logoPreview }));
        } else {
            // Add a new company
            dispatch(addCompany({ ...serializableData, logoPreview }));
        }

        setFormData({
            companyName: "",
            address: "",
            description: "",
            logo: null,
            logoPreview: "",
            dateOfRegistration: "",
            licenseNumber: "",
            phoneNumber: "",
            abbreviation: "",
        });
        setIsModalOpen(false); // Close the modal after submission
    };

    const handleEditClick = (company) => {
        setSelectedCompany(company);
        setIsModalOpen(true);
    };

    const handleUpdate = (updatedCompany) => {
        // Dispatch update action to update the company data
        dispatch(updateCompany(updatedCompany));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCompany(null); // Clear selected company when modal is closed
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 h-screen overflow-y-scroll bg-white">
                <div className="shadow-md p-6 rounded-md">
                    <h2 className="text-lg font-bold text-blue-700 mb-4">
                        {selectedCompany ? "Edit Company" : "Register Company"}
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Company Name:</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="w-full border rounded-3xl p-2 focus:ring focus:ring-gray-200 text-black"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    className="w-full border rounded-3xl p-2 focus:ring focus:ring-gray-200 text-black"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Description:</label>
                            <textarea
                                placeholder="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border rounded-xl p-2 focus:ring focus:ring-gray-200 text-black"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Logo:</label>
                                <input
                                    type="file"
                                    name="logo"
                                    onChange={handleChange}
                                    className="w-full border rounded-3xl p-2 focus:ring focus:ring-gray-200 bg-white text-gray-700 text-black"
                                />
                                {formData.logoPreview && (
                                    <img
                                        src={formData.logoPreview}
                                        alt="Logo Preview"
                                        className="mt-2 w-20 h-20 object-cover border"
                                    />
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Date Of Registration:</label>
                                <input
                                    type="date"
                                    name="dateOfRegistration"
                                    value={formData.dateOfRegistration}
                                    onChange={handleChange}
                                    className="w-full border rounded-3xl p-2 focus:ring-gray-200 text-black"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">License Number:</label>
                                <input
                                    type="text"
                                    name="licenseNumber"
                                    value={formData.licenseNumber}
                                    onChange={handleChange}
                                    placeholder="Enter License Number"
                                    className="w-full border rounded-3xl p-2 focus:ring focus:ring-gray-200 text-black"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Phone Number:</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                    className="w-full border rounded-3xl p-2 focus:ring focus:ring-gray-200 text-black"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Abbreviation:</label>
                                <input
                                    type="text"
                                    name="abbreviation"
                                    value={formData.abbreviation}
                                    onChange={handleChange}
                                    placeholder="Enter Abbreviation"
                                    className="w-full border rounded-3xl p-2 focus:ring focus:ring-gray-200 text-black"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-black"
                            >
                                {selectedCompany ? "Update" : "Submit"}
                            </button>
                            <button
                                type="reset"
                                className=" text-black px-4 py-2 rounded-3xl border border-black"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>

                <CompanyList onEditClick={handleEditClick} />
            </div>

            {/* Edit Company Modal */}
            <EditCompanyModal
                isOpen={isModalOpen}
                companyData={selectedCompany}
                handleClose={handleCloseModal}
                handleUpdate={handleUpdate}
            />
        </div>
    );
};

export default CompanyManagement;

 