import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";

import { bookReducer } from "./reducers/bookReducer";
// import { booksReducer } from "./books";

import { trainingReducer } from "./training/trainingReducers";
import { trainingPlanReducer } from "./trainingPlan/trainingPlanReducers";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    bookReducer: bookReducer,
    // books: bookReducer,
    training: trainingReducer,
    trainingPlan: trainingPlanReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
