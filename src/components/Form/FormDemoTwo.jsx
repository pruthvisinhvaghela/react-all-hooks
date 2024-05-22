import { useRef, useState } from "react";

const FormDemoTwo = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const refDemo = useRef();
  const handleChange = (e) => {
    e.preventDefault();
    const uppercase = e.target.value.toUpperCase();

    if (e.target.name === "firstName") {
      setFname(uppercase);
    } else {
      setLname(e.target.value);
    }
    console.log(fname, lname);
  };
  return (
    <>
      <form action="">
        <label htmlFor="">firstName: </label>
        <input
          type="text"
          name="firstName"
          ref={refDemo}
          value={fname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">lastName:</label>
        <input
          type="text"
          name="lastName"
          ref={refDemo}
          value={lname}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default FormDemoTwo;
