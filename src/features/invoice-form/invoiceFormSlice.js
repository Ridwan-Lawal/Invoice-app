import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: "Create",
  isFormOpen: false,
  isCalendarOpen: false,
  isPaymentTermsFocus: false,
  isCalendarFocus: false,
  paymentTerms: 30,
  isPaymentTermsOpen: false,
  invoiceToEdit: {},
};

const invoiceFormSlice = createSlice({
  name: "invoiceForm",
  initialState,
  reducers: {
    openingForm(state) {
      state.isFormOpen = !state.isFormOpen;
    },
    updateFormType(state, action) {
      state.formType = action.payload;
    },

    calendarOpening(state) {
      state.isCalendarOpen = !state.isCalendarOpen;
      state.isCalendarFocus = true;
    },
    calendarBluring(state) {
      state.isCalendarOpen = false;
      state.isCalendarFocus = false;
    },
    paymentTermsModalOpening(state) {
      state.isPaymentTermsOpen = !state.isPaymentTermsOpen;
    },
    paymentTermsModalBluring(state) {
      state.isPaymentTermsFocus = false;
    },
    paymentTermsModalFocus(state) {
      state.isPaymentTermsFocus = true;
    },
    paymentTermsOption(state, action) {
      state.paymentTerms = action.payload;
    },
    addInvoiceToEdit(state, action) {
      state.invoiceToEdit = action.payload;
    },
  },
});

export const {
  openingForm,
  calendarBluring,
  calendarOpening,
  paymentTermsModalBluring,
  paymentTermsModalFocus,
  paymentTermsModalOpening,
  paymentTermsOption,
  addInvoiceToEdit,
  updateFormType,
} = invoiceFormSlice.actions;
export default invoiceFormSlice.reducer;

export const getInvoiceFormReducer = (store) => store.invoiceForm;
