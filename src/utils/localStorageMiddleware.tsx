import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);
    const state: RootState = store.getState();
    localStorage.setItem("tournamentState", JSON.stringify(state.leaderBoard));
    localStorage.setItem("matchState", JSON.stringify(state.matchHistory));
    return result;
  };
