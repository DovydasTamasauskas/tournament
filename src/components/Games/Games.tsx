import Match from "./Match";
import { useSelector } from "react-redux";
import { StateProps } from "../../features/types";

type DuelProps = {
  team1: string;
  team2: string;
} | null;

const Games = () => {
  const leaderBoard = useSelector((state: StateProps) => state.leaderBoard);
  const teams = leaderBoard && Object.keys(leaderBoard).map((key) => key);

  return (
    <>
      {teams &&
        teams.length > 1 &&
        teams
          .flatMap((team1: string, index1: number) =>
            teams.map((team2: string, index2: number) =>
              index1 < index2 ? { team1, team2 } : null
            )
          )
          .filter((duel: DuelProps) => duel)
          .map((duel: DuelProps) => {
            if (duel && duel.team1 && duel.team2)
              return (
                <Match
                  key={`${duel.team1}-${duel.team2}`}
                  team1={duel.team1}
                  team2={duel.team2}
                ></Match>
              );
          })}
    </>
  );
};

export default Games;
