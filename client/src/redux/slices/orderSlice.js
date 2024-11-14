import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  order: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.orders = action.payload;
    },
    getOrder: (state, action) => {
      state.order = action.payload;
    },
    receiveOrder: (state, action) => {
      state.orders = state.orders.filter((o) => o._id !== action.payload._id);
    },
  },
});

const orderActions = orderSlice.actions;
const orderReducer = orderSlice.reducer;

export { orderActions, orderReducer };
