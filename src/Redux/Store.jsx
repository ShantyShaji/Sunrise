 // src/Redux/Store.js
import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './Slices/SuperAdmin/CompanyManagementSlice'; // Import your company reducer
import userManagementReducer from './Slices/SuperAdmin/UserManagementSlice'; // Import your user management reducer

const store = configureStore({
  reducer: {
    company: companyReducer, // Existing company reducer
    userManagement: userManagementReducer, // Add user management reducer without removing any existing reducers
  },
});

export default store;
