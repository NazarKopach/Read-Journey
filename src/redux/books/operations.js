import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (page = 1, thunkApi) => {
    try {
      const response = await authInstance.get("/books/recommend", {
        params: { page },
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
