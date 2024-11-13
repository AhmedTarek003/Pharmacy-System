import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { medicineReducer } from "./slices/medincineSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    medicine: medicineReducer,
  },
});
