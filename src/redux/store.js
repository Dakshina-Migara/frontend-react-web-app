import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';

//create karnawa state eka meken thama hold karanne userge state eka
export const store = configureStore({
  //reducer kiyanne object ekak
  reducer: {
    //meke form kiyanne state slice eka eka ethule thama data okkoma thiyenne
    //formreducer eken karanne usergen ena data update karanawa
    form: formReducer
  }
});
