 import React, { useState } from "react";

const AddLocationModal = ({ isOpen, handleClose, handleAddLocation }) => {
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setLocation(e.target.value);
        setError("");
    };

    const validateForm = () => {
        if (!location.trim()) {
            setError("Location is required.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleAddLocation(location);
            setLocation(""); // Clear the input after submission
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-lg font-bold text-blue-700 mb-4">Add Location</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Location:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Add Location
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

export default AddLocationModal;
