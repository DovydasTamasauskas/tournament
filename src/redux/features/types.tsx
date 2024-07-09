type TeamResult = {
  points: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
};

export type StateProps = {
  leaderBoard: Record<string, TeamResult>;
};
