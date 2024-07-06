import { useState } from "react";
import { useDispatch } from "react-redux";
import { recordBoard } from "../../reducers/rootReducer";

const Match = (props: any) => {
  const { team1, team2 } = props;

  const [score1, setScore1] = useState<string>();
  const [score2, setScore2] = useState<string>();
  const dispatch = useDispatch();

  const onClick = () => {
    console.log(score1, score2);
    dispatch(recordBoard({ team1, team2, score1, score2 }));
  };

  const onChange = (setTeamScrore: { (): void; (): void }) => {
    setTeamScrore();
  };

  return (
    <div>
      {team1}{" "}
      <input
        type="text"
        name={team1}
        style={{ width: "15px" }}
        onChange={(e) => onChange(() => setScore1(e.target.value))}
      />
      :
      <input
        type="text"
        name={team2}
        style={{ width: "15px" }}
        onChange={(e) => onChange(() => setScore2(e.target.value))}
      />{" "}
      {team2} <button onClick={onClick}>submit</button>
    </div>
  );
};

export default Match;
