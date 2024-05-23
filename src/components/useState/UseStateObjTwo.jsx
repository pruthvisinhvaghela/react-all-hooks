import { useState } from "react";

const UseStateObjTwo = () => {
  const [allName, setName] = useState({
    firstName: "pruthvi",
    lastName: "vaghela",
  });
  const update = (e) => {
    console.log(e);
    setName({ ...allName, firstName: "sagar" });
    // setName({ firstName: "sagar", lastName: "kacha" });
    //here we use spread operator so with the using of this
    //so only first name change but not change in lastName
  };
  return (
    <>
      <h1>
        your first name is {allName.firstName} and last name is{" "}
        {allName.lastName}
      </h1>

      <br />
      <br />
      <br />

      <button onClick={update}> UPDATE</button>
    </>
  );
};

export default UseStateObjTwo;
