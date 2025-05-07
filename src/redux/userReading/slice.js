import { createSlice } from "@reduxjs/toolkit";
import { startReadingBooks } from "./operations";

const initialState = {
  userReading: [],
  isLoading: false,
  error: null,
};

const userReadingBooksSlice = createSlice({
  name: "userReading",
  initialState,
  reducers: {
    resetRecommendedBooks: (state) => {
      state.userBooks = [];
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startReadingBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReadingBooks.fulfilled, (state) => {
        state.isLoading = false;
        state.userBooks;
      })
      .addCase(startReadingBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetRecommendedBooks } = userReadingBooksSlice.actions;

export const userReadingBooksReducer = userReadingBooksSlice.reducer;
