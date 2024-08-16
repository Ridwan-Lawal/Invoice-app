import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice.js";
import invoiceFormReducer from "./features/invoice-form/invoiceFormSlice.js";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    invoiceForm: invoiceFormReducer,
  },
});

export default store;
