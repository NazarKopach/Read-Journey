import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";

export const addRecommendedBooks = createAsyncThunk(
  "books/addRecommendedBooks",
  async (_id, thunkApi) => {
    try {
      const { data } = await authInstance.post(`/books/add/${_id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
