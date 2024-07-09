import { configureStore } from "@reduxjs/toolkit";
import tournamentReducer from "./features/tournamentSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";
import { loadState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: tournamentReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: {
    leaderBoard: preloadedState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
