export const loadLeaderBoard = () => {
  try {
    const serializedState = localStorage.getItem("tournamentState");
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return {};
  }
};

export const loadMatchHistory = () => {
  try {
    const serializedState = localStorage.getItem("matchState");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return [];
  }
};
