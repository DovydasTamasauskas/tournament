import reducer, { addTeam, recordBoard } from '../features/tournamentSlice';

describe('tournamentSlice', () => {
  const initialState: any = {
    leaderBoard: {},
    matchHistory: [],
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addTeam', () => {
    const state = reducer(initialState, addTeam('Team A'));
    expect(state.leaderBoard['Team A']).toEqual({
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      points: 0,
    });
  });

  it('should not add a team if it already exists', () => {
    const stateWithTeam = {
      ...initialState,
      leaderBoard: {
        'Team A': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
      },
    };
    const state = reducer(stateWithTeam, addTeam('Team A'));
    expect(Object.keys(state.leaderBoard)).toHaveLength(1);
  });

  it('should handle recordBoard for a win', () => {
    const stateWithTeams = {
      ...initialState,
      leaderBoard: {
        'Team A': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
        'Team B': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
      },
    };
    const state = reducer(
      stateWithTeams,
      recordBoard({ team1: 'Team A', team2: 'Team B', score1: 2, score2: 1 })
    );
    expect(state.leaderBoard['Team A']).toEqual({
      played: 1,
      wins: 1,
      draws: 0,
      losses: 0,
      points: 3,
    });
    expect(state.leaderBoard['Team B']).toEqual({
      played: 1,
      wins: 0,
      draws: 0,
      losses: 1,
      points: 0,
    });
  });

  it('should handle recordBoard for a draw', () => {
    const stateWithTeams = {
      ...initialState,
      leaderBoard: {
        'Team A': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
        'Team B': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
      },
    };
    const state = reducer(
      stateWithTeams,
      recordBoard({ team1: 'Team A', team2: 'Team B', score1: 1, score2: 1 })
    );
    expect(state.leaderBoard['Team A']).toEqual({
      played: 1,
      wins: 0,
      draws: 1,
      losses: 0,
      points: 1,
    });
    expect(state.leaderBoard['Team B']).toEqual({
      played: 1,
      wins: 0,
      draws: 1,
      losses: 0,
      points: 1,
    });
  });

  it('should handle recordBoard for a loss', () => {
    const stateWithTeams = {
      ...initialState,
      leaderBoard: {
        'Team A': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
        'Team B': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
      },
    };
    const state = reducer(
      stateWithTeams,
      recordBoard({ team1: 'Team A', team2: 'Team B', score1: 1, score2: 2 })
    );
    expect(state.leaderBoard['Team A']).toEqual({
      played: 1,
      wins: 0,
      draws: 0,
      losses: 1,
      points: 0,
    });
    expect(state.leaderBoard['Team B']).toEqual({
      played: 1,
      wins: 1,
      draws: 0,
      losses: 0,
      points: 3,
    });
  });

  it('should handle matchHistory', () => {
    const stateWithTeams = {
      ...initialState,
      leaderBoard: {
        'Team A': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
        'Team B': {
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          points: 0,
        },
      },
    };
    const state = reducer(
      stateWithTeams,
      recordBoard({ team1: 'Team A', team2: 'Team B', score1: 1, score2: 1 })
    );
    expect(state.matchHistory).toEqual([
      {
        team1: { name: 'Team A', score: 1 },
        team2: { name: 'Team B', score: 1 },
      },
    ]);
  });
});
