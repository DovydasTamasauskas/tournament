import Match from "./Match";
import { useSelector } from "react-redux";

const Games = () => {
  const teams = useSelector((state: any) => state.teams);
  console.log(
    teams
      .flatMap((team1: any, index1: number) => {
        return teams.map((team2: any, index2: number) => {
          return index1 < index2 ? { team1, team2 } : null;
        });
      })
      .filter((teams: any) => teams)
  );
  return (
    <>
      {teams &&
        teams.length > 1 &&
        teams.flatMap((team1: any, index1: number) => {
          return teams
            .map((team2: any, index2: number) => {
              return { team1, team2 };
            })
            .filter((teams: any) => {
              return teams.team1.name != teams.team2.name;
            })
            .map((teams: any) => (
              <Match
                // key={team.name}
                team1={teams.team2.name}
                team2={teams.team1.name}
              ></Match>
            ));
        })}
    </>
  );
};

export default Games;
