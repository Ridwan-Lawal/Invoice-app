import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOptionsIsOpen: false,
  sortOptionsIsOpen: false,
  filterOption: "",
  sortOption: "",
  isDarkMode: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    optionsFilterSelect(state, action) {
      state.filterOption = action.payload;
    },
    optionsSortSelect(state, action) {
      console.log(action);
      state.sortOption = action.payload;
    },
    filterOptionsButtonClick(state) {
      state.filterOptionsIsOpen = !state.filterOptionsIsOpen;
      state.sortOptionsIsOpen = false;
    },
    sortOptionsButtonClick(state) {
      state.sortOptionsIsOpen = !state.sortOptionsIsOpen;
      state.filterOptionsIsOpen = false;
    },
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {
  optionsFilterSelect,
  optionsSortSelect,
  filterOptionsButtonClick,
  sortOptionsButtonClick,
  toggleTheme,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;

export const getDashboardReducer = (store) => store.dashboard;

export const getIsDarkMode = (store) => store.dashboard.isDarkMode;
