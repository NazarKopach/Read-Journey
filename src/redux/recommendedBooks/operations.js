import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";

export const addRecommendedBooks = createAsyncThunk(
  "books/addRecommendedBooks",
  async (_id, thunkApi) => {
    try {
      const { data } = await authInstance.post(`/books/add/${_id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const delRecommendedBooks = createAsyncThunk(
  "books/delRecommendedBooks",
  async (_id, thunkApi) => {
    try {
      const { data } = await authInstance.delete(`/books/remove/${_id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userRecommendedBooks = createAsyncThunk(
  "books/userRecommendedBooks",
  async (_, thunkApi) => {
    try {
      const { data } = await authInstance.get("/books/own");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addBooks = createAsyncThunk(
  "books/addBooks",
  async ({ title, author, totalPages }, thunkApi) => {
    try {
      const { data } = await authInstance.post("/books/add", {
        title,
        author,
        totalPages,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
