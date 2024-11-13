import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medicines: [],
  medicine: null,
};

const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {
    getMedicines: (state, action) => {
      state.medicines = action.payload;
    },
    getMedicine: (state, action) => {
      state.medicine = action.payload;
    },
    deleteMedicine: (state, action) => {
      state.medicines = state.medicines.filter(
        (m) => m._id !== action.payload._id
      );
    },
  },
});

const medicineActions = medicineSlice.actions;
const medicineReducer = medicineSlice.reducer;

export { medicineActions, medicineReducer };
