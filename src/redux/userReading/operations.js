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
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
