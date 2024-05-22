// here we send data from child to parent component

import { useState } from "react";

const StateUpComp = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
    console.log("your form submitted");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">firstName</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default StateUpComp;
