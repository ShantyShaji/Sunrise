import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffList: [], // Array to store added staff data
};

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    addStaff: (state, action) => {
      state.staffList.push(action.payload); // Add the new staff data
    },
    editStaff: (state, action) => {
      const { id, updatedStaff } = action.payload;
      const index = state.staffList.findIndex((staff) => staff.id === id);
      if (index !== -1) {
        state.staffList[index] = { ...state.staffList[index], ...updatedStaff };
      }
    },
    deleteStaff: (state, action) => {
      const id = action.payload;
      state.staffList = state.staffList.filter((staff) => staff.id !== id);
    },
  },
});

export const { addStaff, editStaff, deleteStaff } = userManagementSlice.actions;
export default userManagementSlice.reducer;
