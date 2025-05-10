import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";

export const startReadingBooks = createAsyncThunk(
  "reading/start",
  async ({ id, page = 1 }, thunkApi) => {
    try {
      const { data } = await authInstance.post("/books/reading/start", {
        id,
        page,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const finishReadingBooks = createAsyncThunk(
  "reading/finish",
  async ({ id, page }, thunkApi) => {
    try {
      const { data } = await authInstance.post("/books/reading/finish", {
        id,
        page,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteReadingBooksId = createAsyncThunk(
  "reading/delete",
  async ({ bookId, readingId }, thunkApi) => {
    try {
      const { data } = await authInstance.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchReadingBooksId = createAsyncThunk(
  "reading/bookId",
  async (id, thunkApi) => {
    try {
      const { data } = await authInstance.get(`/books/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
