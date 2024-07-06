import "./Table.css";
import { useSelector } from "react-redux";

const Table = () => {
  const leaderBoard = useSelector((state: any) => state.leaderBoard);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Place</th>
          <th scope="col">Team</th>
          <th scope="col">Played</th>
          <th scope="col">Win</th>
          <th scope="col">Draw</th>
          <th scope="col">Lost</th>
          <th scope="col">Pionts</th>
        </tr>
      </thead>
      <tbody>
        {leaderBoard &&
          leaderBoard.map((team: any, index: number) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
