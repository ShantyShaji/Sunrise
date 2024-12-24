import React, { useState } from "react";

const AddClientModal = ({ isOpen, handleClose, handleAddClient }) => {
    const [formData, setFormData] = useState({
        clientName: "",
        address: "",
        termsAndConditions: "",
        paymentTerms: "",
        attention: [""],
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e, index = null) => {
        const { name, value } = e.target;
        if (name === "attention") {
            const updatedAttention = [...formData.attention];
            updatedAttention[index] = value;
            setFormData((prevData) => ({ ...prevData, attention: updatedAttention }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.clientName.trim()) newErrors.clientName = "Client Name is required.";
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.termsAndConditions) newErrors.termsAndConditions = "Terms & Conditions are required.";
        if (!formData.paymentTerms) newErrors.paymentTerms = "Payment Terms are required.";
        if (formData.attention.some((attention) => !attention.trim())) newErrors.attention = "Attention is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleAddClient(formData);
        }
    };

    const addAttentionField = () => {
        setFormData((prevData) => ({
            ...prevData,
            attention: [...prevData.attention, ""],
        }));
    };

    const removeAttentionField = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            attention: prevData.attention.filter((_, i) => i !== index),
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-3xl">
                <h2 className="text-lg font-bold text-blue-700 mb-4">Add Client</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Client Name:</label>
                        <input
                            type="text"
                            name="clientName"
                            value={formData.clientName}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                        {errors.clientName && <p className="text-red-500 text-sm">{errors.clientName}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Terms & Conditions:</label>
                        <select
                            name="termsAndConditions"
                            value={formData.termsAndConditions}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="">Select</option>
                            <option value="Terms1">Terms 1</option>
                            <option value="Terms2">Terms 2</option>
                        </select>
                        {errors.termsAndConditions && <p className="text-red-500 text-sm">{errors.termsAndConditions}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Payment Terms:</label>
                        <select
                            name="paymentTerms"
                            value={formData.paymentTerms}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="">Select</option>
                            <option value="Net30">Net 30</option>
                            <option value="Net60">Net 60</option>
                        </select>
                        {errors.paymentTerms && <p className="text-red-500 text-sm">{errors.paymentTerms}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Attention:</label>
                        {formData.attention.map((value, index) => (
                            <div key={index} className="flex items-center gap-2 mb-2">
                                <input
                                    type="text"
                                    name="attention"
                                    value={value}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full border rounded-md p-2"
                                />
                                {index > 0 && ( // Only show the remove button for additional fields
                <button
                    type="button"
                    onClick={() => removeAttentionField(index)}
                    className="text-red-500 hover:text-red-700"
                >
                    -
                </button>
            )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addAttentionField}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            + Add Field
                        </button>
                        {errors.attention && <p className="text-red-500 text-sm">{errors.attention}</p>}
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Add Client
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

export default AddClientModal;
