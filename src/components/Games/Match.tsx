const Match = (props: any) => {
  const { team1, team2 } = props;

  return (
    <div>
      {team1} <input type="text" name={team1} style={{ width: "15px" }} />:
      <input type="text" name={team2} style={{ width: "15px" }} /> {team2}
    </div>
  );
};

export default Match;
