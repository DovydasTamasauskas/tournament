import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeam } from "../../reducers/rootReducer";

const AddTeam = () => {
  const [name, setName] = useState<string>();

  const dispatch = useDispatch();

  const onButtonClick = () => {
    name && dispatch(addTeam(name));
  };

  return (
    <>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onButtonClick}>Add</button>
    </>
  );
};

export default AddTeam;
