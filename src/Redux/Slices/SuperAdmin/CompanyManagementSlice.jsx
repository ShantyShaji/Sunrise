import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.companies.push(action.payload);
    },
    updateCompany: (state, action) => {
      const { companyId, updatedData } = action.payload;
      const companyIndex = state.companies.findIndex(company => company.id === companyId);
      if (companyIndex !== -1) {
        // Ensure only serializable data is merged into the company state
        const { logoPreview, ...restOfUpdatedData } = updatedData;
        state.companies[companyIndex] = {
          ...state.companies[companyIndex],
          ...restOfUpdatedData,
          logoPreview: logoPreview || state.companies[companyIndex].logoPreview, // Preserve the old logo if not updated
        };
      }
    },
  },
});

export const { addCompany, updateCompany } = companySlice.actions;
export default companySlice.reducer;
