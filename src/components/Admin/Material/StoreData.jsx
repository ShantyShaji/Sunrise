import React, { useState } from 'react';
import Adminsidebar from '../../../Sidebar/Adminsidebar';
import { FaTools, FaList, FaUsersCog, FaCheckCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosInformationCircle } from 'react-icons/io';

const StoreData = () => {
  const [expandedSection, setExpandedSection] = useState('addTools');
  const [toolName, setToolName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [expandedDescription, setExpandedDescription] = useState(null);

  // Dummy data for the table
  const toolsList = [
    {
      id: 1,
      name: 'Hammer',
      description:
        'Heavy duty construction hammer with reinforced handle and anti-slip grip. Suitable for professional use in construction and home improvement projects.',
    },
    {
      id: 2,
      name: 'Power Drill',
      description:
        'Cordless power drill with variable speed control and LED light. Includes 20V lithium-ion battery and quick-change chuck system.',
    },
    {
      id: 3,
      name: 'Measuring Tape',
      description:
        'Professional grade 25-foot measuring tape with magnetic hook and impact-resistant case. Features both metric and imperial measurements.',
    },
    {
      id: 4,
      name: 'Wrench Set',
      description:
        'Complete set of combination wrenches in various sizes. Made from chrome vanadium steel with mirror polish finish.',
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!toolName.trim()) {
      newErrors.toolName = 'Tool name is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', { toolName, description });
      // Reset form
      setToolName('');
      setDescription('');
      setErrors({});
    }
  };

  const handleEdit = (id) => {
    console.log('Edit tool:', id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log('Delete tool:', id);
    // Implement delete functionality
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex">
      <Adminsidebar />

      <div className="main-content w-full md:w-[calc(100%-300px)] h-full overflow-y-scroll p-4">
        <div className="title-sec w-full h-[12vh] flex items-center justify-center px-8">
          <h1 className="text-[1.8rem] font-semibold text-gray-800 relative">
            Store Management
          </h1>
        </div>

        <div className="accordion-container space-y-6 max-w-3xl mx-auto">
          {/* Add Tools Section */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <button
              className={`w-full p-5 text-left font-medium flex justify-between items-center ${
                expandedSection === 'addTools'
                  ? 'bg-blue-50 rounded-t-xl'
                  : 'rounded-xl'
              }`}
              onClick={() => toggleSection('addTools')}
            >
              <div className="flex items-center gap-3">
                <FaTools className="text-blue-500 text-xl" />
                <span className="text-gray-700 text-lg">Add Tools</span>
              </div>
              <IoIosArrowDown
                className={`text-gray-400 text-xl transition-transform duration-300 ease-in-out ${
                  expandedSection === 'addTools' ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === 'addTools'
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 border-t bg-white rounded-b-xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block mb-2 text-gray-600 font-medium">
                      Tool Name
                    </label>
                    <input
                      type="text"
                      value={toolName}
                      onChange={(e) => setToolName(e.target.value)}
                      placeholder="Enter tool name"
                      className={`w-full p-3 border ${
                        errors.toolName ? 'border-red-500' : 'border-gray-200'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    />
                    {errors.toolName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.toolName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-600 font-medium">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter tool description"
                      rows="3"
                      className={`w-full p-3 border ${
                        errors.description
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200 font-medium"
                  >
                    Save Tool
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* List Tools Section */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <button
              className={`w-full p-5 text-left font-medium flex justify-between items-center ${
                expandedSection === 'listTools'
                  ? 'bg-blue-50 rounded-t-xl'
                  : 'rounded-xl'
              }`}
              onClick={() => toggleSection('listTools')}
            >
              <div className="flex items-center gap-3">
                <FaList className="text-green-500 text-xl" />
                <span className="text-gray-700 text-lg">List Tools</span>
              </div>
              <IoIosArrowDown
                className={`text-gray-400 text-xl transition-transform duration-300 ease-in-out ${
                  expandedSection === 'listTools' ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === 'listTools'
                  ? 'max-h-[800px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 border-t">
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Sl.No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Tool Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {toolsList.map((tool, index) => (
                        <tr
                          key={tool.id}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                              {tool.id}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0 mr-4">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <FaTools className="h-5 w-5 text-blue-500" />
                                </div>
                              </div>
                              <div className="text-sm font-medium text-gray-900">
                                {tool.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600 max-w-md">
                              <div
                                className={`${
                                  expandedDescription === tool.id
                                    ? ''
                                    : 'line-clamp-2'
                                }`}
                              >
                                {tool.description}
                              </div>
                              {tool.description.length > 100 && (
                                <button
                                  onClick={() =>
                                    setExpandedDescription(
                                      expandedDescription === tool.id
                                        ? null
                                        : tool.id
                                    )
                                  }
                                  className="inline-flex items-center gap-1 mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
                                >
                                  <span className="text-sm">
                                    {expandedDescription === tool.id
                                      ? 'Show Less'
                                      : 'Read More'}
                                  </span>
                                  <IoIosArrowDown
                                    className={`text-blue-500 transition-transform duration-300 ${
                                      expandedDescription === tool.id
                                        ? 'rotate-180'
                                        : 'rotate-0'
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                            <button
                              onClick={() => handleEdit(tool.id)}
                              className="inline-flex items-center px-3 py-1.5 border border-blue-500 text-blue-500 bg-white rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200"
                            >
                              <span className="text-sm">Edit</span>
                            </button>
                            <button
                              onClick={() => handleDelete(tool.id)}
                              className="inline-flex items-center px-3 py-1.5 border border-red-500 text-red-500 bg-white rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200"
                            >
                              <span className="text-sm">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Empty State */}
                  {toolsList.length === 0 && (
                    <div className="text-center py-12">
                      <FaTools className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        No tools
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Get started by creating a new tool.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Assign Tools Section */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <button
              className={`w-full p-5 text-left font-medium flex justify-between items-center ${
                expandedSection === 'assignTools'
                  ? 'bg-blue-50 rounded-t-xl'
                  : 'rounded-xl'
              }`}
              onClick={() => toggleSection('assignTools')}
            >
              <div className="flex items-center gap-3">
                <FaUsersCog className="text-yellow-500 text-xl" />
                <span className="text-gray-700 text-lg">Assign Tools</span>
              </div>
              <IoIosArrowDown
                className={`text-gray-400 text-xl transition-transform duration-300 ease-in-out ${
                  expandedSection === 'assignTools' ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === 'assignTools'
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 border-t">
                {/* Add your assign tools content here */}
              </div>
            </div>
          </div>

          {/* Assigned Status Section */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <button
              className={`w-full p-5 text-left font-medium flex justify-between items-center ${
                expandedSection === 'assignedStatus'
                  ? 'bg-blue-50 rounded-t-xl'
                  : 'rounded-xl'
              }`}
              onClick={() => toggleSection('assignedStatus')}
            >
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500 text-xl" />
                <span className="text-gray-700 text-lg">Assigned Status</span>
              </div>
              <IoIosArrowDown
                className={`text-gray-400 text-xl transition-transform duration-300 ease-in-out ${
                  expandedSection === 'assignedStatus'
                    ? 'rotate-180'
                    : 'rotate-0'
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === 'assignedStatus'
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 border-t">
                {/* Add your assigned status content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreData;
