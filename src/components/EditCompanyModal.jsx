import React, { useState, useEffect } from "react";

const EditCompanyModal = ({ isOpen, companyData, handleClose, handleUpdate }) => {
    const [formData, setFormData] = useState({
        companyName: "",
        address: "",
        description: "",
        logoPreview: "",
        dateOfRegistration: "",
        licenseNumber: "",
        phoneNumber: "",
        abbreviation: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (companyData) {
            setFormData({
                companyName: companyData.companyName || "",
                address: companyData.address || "",
                description: companyData.description || "",
                logoPreview: companyData.logoPreview || "",
                dateOfRegistration: companyData.dateOfRegistration || "",
                licenseNumber: companyData.licenseNumber || "",
                phoneNumber: companyData.phoneNumber || "",
                abbreviation: companyData.abbreviation || "",
            });
        }
    }, [companyData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData((prevData) => ({
                        ...prevData,
                        logoPreview: reader.result,
                    }));
                };
                reader.readAsDataURL(file);
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required.";
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.description.trim()) newErrors.description = "Description is required.";
        if (!formData.dateOfRegistration.trim()) newErrors.dateOfRegistration = "Date of Registration is required.";
        if (!formData.licenseNumber.trim()) newErrors.licenseNumber = "License Number is required.";
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required.";
        if (!formData.abbreviation.trim()) newErrors.abbreviation = "Abbreviation is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleUpdate(formData);
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50  overflow-y-scroll">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-3xl h-[80vh] overflow-y-scroll">
                <h2 className="text-lg font-bold text-blue-700 mb-4">Edit Company</h2>
                <form onSubmit={handleSubmit}>
                    {[
                        { label: "Company Name", name: "companyName", type: "text" },
                        { label: "Address", name: "address", type: "text" },
                        { label: "Description", name: "description", type: "textarea" },
                        { label: "Date of Registration", name: "dateOfRegistration", type: "date" },
                        { label: "License Number", name: "licenseNumber", type: "text" },
                        { label: "Phone Number", name: "phoneNumber", type: "tel" },
                        { label: "Abbreviation", name: "abbreviation", type: "text" },
                    ].map((field) => (
                        <div key={field.name} className="mb-2">
                            <label className="block text-gray-700 mb-1">
                                {field.label}:
                            </label>
                            {field.type === "textarea" ? (
                                <textarea
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
                                />
                            )}
                            {errors[field.name] && (
                                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                            )}
                        </div>
                    ))}
                    <div className="mb-2">
                        <label className="block text-gray-700 mb-1">Logo:</label>
                        <input
                            type="file"
                            name="logo"
                            onChange={handleChange}
                            className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200 bg-white text-gray-700 text-black"
                        />
                        {formData.logoPreview && (
                            <img
                                src={formData.logoPreview}
                                alt="Logo Preview"
                                className="mt-2 w-20 h-20 object-cover border"
                            />
                        )}
                    </div>
                    <div className="flex space-x-4 mt-2">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCompanyModal;
