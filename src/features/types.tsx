type TeamResult = {
  points: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
};

type MatchResult = {
  team1: { name: string; score: number };
  team2: { name: string; score: number };
};

export type StateProps = {
  leaderBoard: Record<string, TeamResult>;
  matchHistory: MatchResult[];
};
