import { createSelector } from "@reduxjs/toolkit";

export const selectBooksState = (state) => state.books;

export const selectBooks = (state) => state.books.items.results;
export const selectBooksIsLoading = (state) => state.books.isLoading;
export const selectPages = createSelector([selectBooksState], (books) => ({
  page: books.page,
  totalPages: books.totalPages,
}));
