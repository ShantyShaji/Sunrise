import React from 'react';
import Adminsidebar from '../../../Sidebar/Adminsidebar';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Staffdetails = () => {
  const navigate = useNavigate();

  const staffData = [
    {
      id: 1,
      name: 'Aaa new staff',
      role: 'Staff',
      dateOfRegistration: '05-11-2024',
    },
    {
      id: 2,
      name: 'AAAA Staff',
      role: 'Staff',
      dateOfRegistration: '08-11-2024',
    },
    { id: 3, name: 'Aanand', role: 'Staff', dateOfRegistration: '01-11-2024' },
    {
      id: 4,
      name: 'Ambadi',
      role: 'Sales Person',
      dateOfRegistration: '25-10-2024',
    },
    {
      id: 5,
      name: 'Ammu',
      role: 'Sales Person',
      dateOfRegistration: '08-11-2024',
    },
    { id: 6, name: 'Anna', role: 'Staff', dateOfRegistration: '06-11-2024' },
    {
      id: 7,
      name: 'Annu',
      role: 'Sales Person',
      dateOfRegistration: '06-11-2024',
    },
    {
      id: 8,
      name: 'Anwar',
      role: 'Sales Person',
      dateOfRegistration: '28-10-2024',
    },
    {
      id: 9,
      name: 'Madhav',
      role: 'Sales Person',
      dateOfRegistration: '28-10-2024',
    },
    {
      id: 10,
      name: 'Malavika',
      role: 'Sales Person',
      dateOfRegistration: '25-10-2024',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Adminsidebar />

      <div className="flex-1 md:w-[calc(100%-300px)] h-screen overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8"
        >
          {/* Header section */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => navigate('/user-management-dashboard')}
                className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <IoArrowBack
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
                <span className="text-sm font-medium">Dashboard</span>
              </button>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Staff Details
              </h1>
            </div>
          </div>

          {/* Table Container */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600 w-24">
                      Sl No.
                    </th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600">
                      Staff Name
                    </th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600">
                      Role
                    </th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600">
                      Date Of Registration
                    </th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staffData.map((staff, index) => (
                    <motion.tr
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={staff.id}
                      className="group hover:bg-blue-50/50 transition-colors duration-300"
                    >
                      <td className="px-8 py-5 w-24">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                          {staff.id}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                          {staff.name}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {staff.role}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {staff.dateOfRegistration}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-50 transition-colors duration-300"
                          >
                            User Rights
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                          >
                            Edit
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors duration-300"
                          >
                            Delete
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* pagination */}
            <div className="px-8 py-5 border-t border-gray-200 bg-gray-50 flex items-center justify-end">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Staffdetails;
