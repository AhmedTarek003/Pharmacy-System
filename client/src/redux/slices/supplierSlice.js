import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suppliers: [],
  supplier: null,
};

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    getSuppliers: (state, action) => {
      state.suppliers = action.payload;
    },
    getSupplier: (state, action) => {
      state.supplier = action.payload;
    },
    deleteSupplier: (state, action) => {
      state.suppliers = state.suppliers.filter(
        (s) => s._id !== action.payload._id
      );
    },
  },
});

const supplierActions = supplierSlice.actions;
const supplierReducer = supplierSlice.reducer;

export { supplierActions, supplierReducer };
