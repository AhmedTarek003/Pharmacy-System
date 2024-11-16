import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
  invoice: null,
  invoiceItems: JSON.parse(localStorage.getItem("invoiceItems"))
    ? JSON.parse(localStorage.getItem("invoiceItems"))
    : [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    getInvoices: (state, action) => {
      state.invoices = action.payload;
    },
    getInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    additemsToInvoice: (state, action) => {
      const existItem = state.invoiceItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existItem) {
        state.invoiceItems.push(action.payload);
        localStorage.setItem(
          "invoiceItems",
          JSON.stringify(state.invoiceItems)
        );
      }
    },
    removeItemFromInvoice: (state, action) => {
      state.invoiceItems = state.invoiceItems.filter(
        (i) => i._id !== action.payload._id
      );
    },
    clearInvoice: (state) => {
      state.invoiceItems = [];
      localStorage.removeItem("invoiceItems");
    },
  },
});

const invoiceActions = invoiceSlice.actions;
const invoiceReducer = invoiceSlice.reducer;

export { invoiceActions, invoiceReducer };
