import { useContext } from "react";
import { data, data1 } from "../../App";
const ChildTwo = () => {
  const name = useContext(data);
  const age = useContext(data1);
  return (
    <>
      <h1>hello my name is {name} </h1>
      <br />
      <h3>my age is {age}</h3>
    </>
  );
};

export default ChildTwo;
