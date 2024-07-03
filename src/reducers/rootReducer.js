import { createSlice } from "@reduxjs/toolkit";

export const rootStore = createSlice({
  name: "teams",
  initialState: {
    teams: [{ name: "pirma" }],
  },
  reducers: {
    addTeam: (state, action) => {
      state.teams = [...state.teams, { name: action.payload }];
    },
  },
});

export const { addTeam } = rootStore.actions;

export default rootStore.reducer;
