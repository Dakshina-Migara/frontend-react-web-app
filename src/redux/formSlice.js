import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  formData: {}
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    completeStep: (state, action) => {
      state.currentStep = Math.max(state.currentStep, action.payload + 1);
    },
    saveData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload
      };
    }
  }
});

export const { completeStep, saveData } = formSlice.actions;
export default formSlice.reducer;
