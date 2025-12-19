import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,  
  data: {}  
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;  
    },
    saveData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    }
  }
});

export const { nextStep, saveData } = formSlice.actions;
export default formSlice.reducer;
