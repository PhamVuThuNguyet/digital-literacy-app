import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  words: {},
  knowledge: {},
};

const staticSlice = createSlice({
  name: "static",
  initialState,
  reducers: {
    setStaticData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setStaticData } = staticSlice.actions;
export default staticReducer = staticSlice.reducer;
