import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./operations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPages: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setPage } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
