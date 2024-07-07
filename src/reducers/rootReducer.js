import { createSlice } from "@reduxjs/toolkit";

export const rootStore = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    leaderBoard: {},
  },
  reducers: {
    addTeam: (state, action) => {
      const name = action.payload;
      if (!Object.keys(state.leaderBoard).find((keyName) => keyName === name)) {
        state.leaderBoard[name] = {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        };
      }
    },
    recordBoard: (state, action) => {
      const { team1, team2, score1, score2 } = action.payload;

      if (score1 > score2) {
        state.leaderBoard[team1].points += 3;
        state.leaderBoard[team1].wins += 1;
        state.leaderBoard[team2].losses += 1;
      } else if (score1 < score2) {
        state.leaderBoard[team2].points += 3;
        state.leaderBoard[team2].wins += 1;
        state.leaderBoard[team1].losses += 1;
      } else {
        state.leaderBoard[team1].points += 1;
        state.leaderBoard[team2].points += 1;
        state.leaderBoard[team1].draws += 1;
        state.leaderBoard[team2].draws += 1;
      }

      state.leaderBoard[team1].gamesPlayed += 1;
      state.leaderBoard[team2].gamesPlayed += 1;
    },
  },
});

export const { addTeam, recordBoard } = rootStore.actions;

export default rootStore.reducer;
