import "./App.css";
import Table from "./components/Table/Table";
import AddTeam from "./components/AddTeam/AddTeam";
import Games from "./components/Games/Games";

function App() {
  return (
    <div>
      <AddTeam></AddTeam>
      <Table></Table>
      <Games></Games>
    </div>
  );
}

export default App;
