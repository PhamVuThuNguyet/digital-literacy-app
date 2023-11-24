import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        isAuth: true,
        user: action.payload,
      };
    },
    logout: (state, action) => {
      return {
        isAuth: false,
        user: {},
      };
    },
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authReducer = authSlice.reducer;
