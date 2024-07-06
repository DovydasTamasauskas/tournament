import { createSlice } from "@reduxjs/toolkit";

export const rootStore = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    leaderBoard: [],
  },
  reducers: {
    addTeam: (state, action) => {
      const name = action.payload;
      if (!state.teams.find((team) => team.name === name)) {
        state.teams = [...state.teams, { name }];
        state.leaderBoard = [
          ...state.leaderBoard,
          {
            name,
            points: 0,
            played: 1,
            wins: 0,
            draws: 0,
            losses: 0,
          },
        ];
      }
    },
  },
});

export const { addTeam } = rootStore.actions;

export default rootStore.reducer;
