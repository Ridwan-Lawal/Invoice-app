import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOptionsIsOpen: false,
  sortOptionsIsOpen: false,
  filterOptions: {
    draft: false,
    pending: false,
    paid: false,
  },
  sortOptions: {
    name: false,
    status: false,
    "due date": false,
    total: false,
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    optionsFilterSelect(state, action) {
      state.filterOptions[action.payload.toLowerCase()] =
        !state[[action.payload.toLowerCase()]];
    },
    optionsSortSelect(state, action) {
      state.sortOptions[action.payload.toLowerCase()] =
        !state[[action.payload.toLowerCase()]];
    },
    filterOptionsButtonClick(state) {
      state.filterOptionsIsOpen = !state.filterOptionsIsOpen;
      state.sortOptionsIsOpen = false;
    },
    sortOptionsButtonClick(state) {
      state.sortOptionsIsOpen = !state.sortOptionsIsOpen;
      state.filterOptionsIsOpen = false;
    },
  },
});

export const {
  optionsFilterSelect,
  optionsSortSelect,
  filterOptionsButtonClick,
  sortOptionsButtonClick,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
