export const loadState = () => {
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
