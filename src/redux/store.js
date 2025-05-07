import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { booksReducer } from "./books/slice";
import { filtersReducer } from "./filters/filters";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { recommendedBooksReducer } from "./recommendedBooks/slice";
import { userReadingBooksReducer } from "./userReading/slice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    books: booksReducer,
    filters: filtersReducer,
    recBooks: recommendedBooksReducer,
    userRading: userReadingBooksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
