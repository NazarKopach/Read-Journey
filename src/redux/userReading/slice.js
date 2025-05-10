import { createSlice } from "@reduxjs/toolkit";
import {
  deleteReadingBooksId,
  fetchReadingBooksId,
  finishReadingBooks,
  startReadingBooks,
} from "./operations";

const initialState = {
  userBooks: [],
  isLoading: false,
  error: null,
};

const userReadingBooksSlice = createSlice({
  name: "userBooks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(startReadingBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReadingBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks = action.payload;
      })
      .addCase(startReadingBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(finishReadingBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(finishReadingBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks = action.payload;
      })
      .addCase(finishReadingBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchReadingBooksId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchReadingBooksId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks = action.payload;
      })
      .addCase(fetchReadingBooksId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(deleteReadingBooksId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteReadingBooksId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks = action.payload;
      })
      .addCase(deleteReadingBooksId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const userReadingBooksReducer = userReadingBooksSlice.reducer;
