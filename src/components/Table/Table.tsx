import "./Table.css";
import { useSelector } from "react-redux";
import { StateProps } from "../../features/types";

const Table = () => {
  const leaderBoard = useSelector((state: StateProps) => state.leaderBoard);

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
      {leaderBoard &&
        Object.keys(leaderBoard)
          .sort((a, b) => leaderBoard[b].points - leaderBoard[a].points)
          .map((team, index) => (
            <tr key={team}>
              <td>{index + 1}</td>
              <td>{team}</td>
              <td>{leaderBoard[team].played}</td>
              <td>{leaderBoard[team].wins}</td>
              <td>{leaderBoard[team].draws}</td>
              <td>{leaderBoard[team].losses}</td>
              <td>{leaderBoard[team].points}</td>
            </tr>
          ))}
    </table>
  );
};

export default Table;
