import { configureStore } from "@reduxjs/toolkit";
import tournamentReducer from "../features/tournamentSlice";
import { localStorageMiddleware } from "../utils/localStorageMiddleware";
import { loadLeaderBoard, loadMatchHistory } from "../utils/localStorage";

const preloadedLeaderBoard = loadLeaderBoard();
const preloadedMatchHistory = loadMatchHistory();

export const store = configureStore({
  reducer: tournamentReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: {
    leaderBoard: preloadedLeaderBoard,
    matchHistory: preloadedMatchHistory,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
