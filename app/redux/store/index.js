import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import staticReducer from "../slices/staticSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    static: staticReducer,
  },
});
