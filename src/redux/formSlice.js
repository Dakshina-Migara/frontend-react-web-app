import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  // step kiyanne mona page ekeda inne kiyana eka track karanawa
  step: 1,  
  //user input karana data store karala thiyagannawa
  data: {}  
};

const formSlice = createSlice({
  name: "form",
  //patan ganna ona state eka set karanawa
  initialState,
  //meken state eka change wenawa
  reducers: {
    //user next eka click karama step ekak yanna ona
    nextStep: (state) => {
      state.step += 1;  
    },
    //kalin thiyena data ekatama aluthen ena data eka ekathu karnne meken
    saveData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    }
  }
});

export const { nextStep, saveData } = formSlice.actions;
//reducer eka yawanawa store ekata
export default formSlice.reducer;
