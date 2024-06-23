import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormOpen: false,
};

const invoiceFormSlice = createSlice({
  name: "invoiceForm",
  initialState,
  reducers: {
    openingForm(state) {
      state.isFormOpen = !state.isFormOpen;
    },
  },
});

export const { openingForm } = invoiceFormSlice.actions;
export default invoiceFormSlice.reducer;
