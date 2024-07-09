import { createSlice } from "@reduxjs/toolkit";
import { StateProps } from "./types";

const initialState: StateProps = {
  leaderBoard: {},
  matchHistory: [],
};

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    addTeam: (state, action) => {
      const name = action.payload;
      if (
        state.leaderBoard &&
        !Object.keys(state.leaderBoard).find((keyName) => keyName === name)
      ) {
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

      state.leaderBoard[team1].played += 1;
      state.leaderBoard[team2].played += 1;

      if (state?.matchHistory?.length > 0) {
        state.matchHistory.push({
          team1: { name: team1, score: score1 },
          team2: { name: team2, score: score2 },
        });
      } else {
        state.matchHistory = [
          {
            team1: { name: team1, score: score1 },
            team2: { name: team2, score: score2 },
          },
        ];
      }
    },
  },
});

export const { addTeam, recordBoard } = tournamentSlice.actions;

export default tournamentSlice.reducer;
