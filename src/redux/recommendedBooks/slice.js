import { createSlice } from "@reduxjs/toolkit";
import { addRecommendedBooks } from "./operations";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const recommendedBooksSlice = createSlice({
  name: "recommendedBooks",
  initialState,
  reducers: {
    resetRecommendedBooks: (state) => {
      state.books = [];
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
        state.books.push(action.payload);
      })
      .addCase(addRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetRecommendedBooks } = recommendedBooksSlice.actions;

export const recommendedBooksReducer = recommendedBooksSlice.reducer;
