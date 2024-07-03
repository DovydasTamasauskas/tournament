import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeam } from "../../reducers/rootReducer";

const AddTeam = () => {
  const [name, setName] = useState<string>();

  const dispatch = useDispatch();

  const onButtonClick = () => {
    name && dispatch(addTeam(name));
  };

  const onInputChange = (e: any) => {
    const val = e.target.value;
    val && setName(val);
  };

  return (
    <>
      <input type="text" id="name" name="name" onChange={onInputChange} />
      <button onClick={onButtonClick}>Add</button>
    </>
  );
};

export default AddTeam;
