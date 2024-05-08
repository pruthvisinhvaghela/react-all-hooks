import { useState } from "react";

const UseStateObj = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name, value);
    // setName(e.target.value); //// for single value get

    setName((prev) => {
      return { ...prev, [name]: value };
    }); //to add prev value and change with new value
  };
  return (
    <>
      <form action="">
        {/* <h1>{name}</h1> */}
        <label htmlFor="">firstName</label>
        <input
          type="text"
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}

          onChange={handleChange}
          name="firstName"
          value={name.firstName}
        />
        <br />

        <label htmlFor="">lastName</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={name.lastName}
        />
      </form>
    </>
  );
};

export default UseStateObj;
