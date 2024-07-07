import { useState } from "react";
import { useDispatch } from "react-redux";
import { recordBoard } from "../../reducers/rootReducer";

const Match = (props: any) => {
  const { team1, team2 } = props;

  const [score1, setScore1] = useState<string>();
  const [score2, setScore2] = useState<string>();
  const [isDisabled, setisDisabled] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    if (score1 && score2 && !!Number(score1) && !!Number(score2)) {
      dispatch(recordBoard({ team1, team2, score1, score2 }));
      setisDisabled(true);
    }
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
        disabled={isDisabled}
      />
      :
      <input
        type="text"
        name={team2}
        style={{ width: "15px" }}
        onChange={(e) => onChange(() => setScore2(e.target.value))}
        disabled={isDisabled}
      />{" "}
      {team2} {!isDisabled && <button onClick={onClick}>submit</button>}
    </div>
  );
};

export default Match;
