import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully", formData);
      // Proceed with login logic here, e.g., API call
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear errors on input
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col-reverse lg:flex-row w-full h-auto lg:h-screen bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Left Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center p-8 lg:p-16 xl:p-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome!</h1>

        {/* Company Input */}
        <label htmlFor="company" className="text-sm font-medium text-gray-600 mb-2">
          Company
        </label>
        <select
          id="company"
          className={`w-full bg-gray-50 border rounded-3xl px-3 py-2 mb-1 focus:outline-none ${
            errors.company ? "border-red-500" : ""
          }`}
          value={formData.company}
          onChange={handleChange}
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
        {errors.company && <span className="text-red-500 text-sm mb-3">{errors.company}</span>}

        {/* Email Input */}
        <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2">
          Email
        </label>
        <div
          className={`flex items-center border rounded-3xl mb-1 bg-gray-50 px-3 py-2 ${
            errors.email ? "border-red-500" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 7.5l-9 6-9-6m18 0v9.75A2.25 2.25 0 0118.75 19.5H5.25a2.25 2.25 0 01-2.25-2.25V7.5m18 0L12 13.5 3.75 7.5"
            />
          </svg>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yatingzang0215@gmail.com"
            className="ml-2 w-full bg-transparent focus:outline-none"
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm mb-3">{errors.email}</span>}

        {/* Password Input */}
        <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">
          Password
        </label>
        <div
          className={`flex items-center border rounded-3xl mb-1 bg-gray-50 px-3 py-2 relative ${
            errors.password ? "border-red-500" : ""
          }`}
        >
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="*********"
            className="ml-2 w-full bg-transparent focus:outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 focus:outline-none"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.69C5.856 6.29 8.5 4.5 12 4.5c5.364 0 9.75 6.75 9.75 6.75a16.42 16.42 0 01-1.799 2.263m-3.472 2.72a3.75 3.75 0 01-5.184-5.184M3 3l18 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
        {errors.password && <span className="text-red-500 text-sm mb-3">{errors.password}</span>}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded-3xl mt-4 transition duration-300"
        >
          Log in
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/5 flex items-center justify-center">
        <img
          src="/sunrise_login_img.png"
          alt="3D Cube"
          className="w-full h-full object-cover rounded-tl-[4rem]"
        />
      </div>
    </form>
  );
};

export default LoginPage;
