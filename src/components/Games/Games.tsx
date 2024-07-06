import Match from "./Match";
import { useSelector } from "react-redux";

const Games = () => {
  const teams = useSelector((state: any) => state.teams);

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
              key={`${duel.team1.name}-${duel.team2.name}`}
              team1={duel.team2.name}
              team2={duel.team1.name}
            ></Match>
          ))}
    </>
  );
};

export default Games;
