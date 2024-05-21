import { useState } from "react";
// control Component
// react think in input we set value means it think props
// we can handle with onchange or defaultValue

const FormExample = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.name === "firstName") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPassword(e.target.value);
    }
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="">firstname</label>
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default FormExample;
