import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state) => {
      state.title = "";
      state.author = "";
    },
  },
});

export const { setTitle, setAuthor, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
