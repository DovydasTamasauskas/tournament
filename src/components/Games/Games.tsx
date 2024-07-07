import Match from "./Match";
import { useSelector } from "react-redux";

const Games = () => {
  const leaderBoard = useSelector((state: any) => state.leaderBoard);
  const teams = Object.keys(leaderBoard).map((key) => key);

  return (
    <>
      {teams &&
        teams.length > 1 &&
        teams
          .flatMap((team1: any, index1: number) =>
            teams.map((team2: any, index2: number) =>
              index1 < index2 ? { team1, team2 } : null
            )
          )
          .filter((duel: any) => duel)
          .map((duel: any) => (
            <Match
              key={`${duel.team1}-${duel.team2}`}
              team1={duel.team2}
              team2={duel.team1}
            ></Match>
          ))}
    </>
  );
};

export default Games;
