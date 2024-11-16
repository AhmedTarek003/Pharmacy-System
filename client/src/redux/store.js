import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { medicineReducer } from "./slices/medincineSlice";
import { supplierReducer } from "./slices/supplierSlice";
import { orderReducer } from "./slices/orderSlice";
import { invoiceReducer } from "./slices/invoiceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    medicine: medicineReducer,
    supplier: supplierReducer,
    order: orderReducer,
    invoice: invoiceReducer,
  },
});
