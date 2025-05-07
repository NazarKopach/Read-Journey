import { createSlice } from "@reduxjs/toolkit";
import {
  addBooks,
  addRecommendedBooks,
  delRecommendedBooks,
  userRecommendedBooks,
} from "./operations";

const initialState = {
  userBooks: [],
  isLoading: false,
  error: null,
};

const recommendedBooksSlice = createSlice({
  name: "recommendedBooks",
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
      .addCase(addRecommendedBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks.push(action.payload);
      })
      .addCase(addRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(userRecommendedBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks = action.payload;
      })
      .addCase(userRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(delRecommendedBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(delRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks = state.userBooks.filter(
          (book) => book._id !== action.meta.arg
        );
      })
      .addCase(delRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBooks.push(action.payload);
      })
      .addCase(addBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetRecommendedBooks } = recommendedBooksSlice.actions;

export const recommendedBooksReducer = recommendedBooksSlice.reducer;
