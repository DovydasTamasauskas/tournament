import "./App.css";
import Table from "../components/Table/Table";
import AddTeam from "../components/AddTeam/AddTeam";
import Games from "../components/Games/Games";

function App() {
  return (
    <div className="container">
      <div className="add-team">
        <AddTeam />
      </div>
      <div className="leader-board">
        <Table />
      </div>
      <div className="match-making">
        <Games />
      </div>
    </div>
  );
}

export default App;
