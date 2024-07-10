import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recordBoard } from "../../features/tournamentSlice";
import { StateProps } from "../../features/types";
import "./Match.css";

type MatchProps = {
  team1: string;
  team2: string;
};

const Match: React.FC<MatchProps> = (props) => {
  const { team1, team2 } = props;

  const [score1, setScore1] = useState<string>();
  const [score2, setScore2] = useState<string>();
  const [isDisabled, setisDisabled] = useState(false);

  const dispatch = useDispatch();

  const matchHistory = useSelector((state: StateProps) => state.matchHistory);

  useEffect(() => {
    matchHistory.forEach((match) => {
      if (
        (match.team1.name === team1 && match.team2.name === team2) ||
        (match.team2.name === team1 && match.team1.name === team2)
      ) {
        setScore1(match.team1.score.toString());
        setScore2(match.team2.score.toString());
        setisDisabled(true);
      }
    });
  }, [matchHistory, team1, team2]);

  const isNumber = (val: string | undefined) =>
    (val && !!Number(val)) || val === "0";

  const onClick = () => {
    if (isNumber(score1) && isNumber(score2)) {
      dispatch(recordBoard({ team1, team2, score1, score2 }));
      setisDisabled(true);
    }
  };

  return (
    <div className="match-container">
      <span className="team-name">{team1}</span>
      <input
        type="text"
        name={team1}
        value={score1}
        onChange={(e) => setScore1(e.target.value)}
        disabled={isDisabled}
        className="team-score"
      />
      <span className="score-separator">:</span>
      <input
        type="text"
        name={team2}
        value={score2}
        onChange={(e) => setScore2(e.target.value)}
        disabled={isDisabled}
        className="team-score"
      />
      <span>{team2}</span>
      {!isDisabled && <button onClick={onClick}>Submit</button>}
    </div>
  );
};

export default Match;
