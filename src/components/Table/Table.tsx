import "./Table.css";
import { useSelector } from "react-redux";

const Table = () => {
  const counter = useSelector((state) => state);
  console.log(counter);
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
