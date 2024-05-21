import { useState } from "react";
// control Component
// react think in input we set value means it think props
// we can handle with onchange or defaultValue

const FormExample = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" value={name} onChange={handleChange} />
      </form>
    </div>
  );
};

export default FormExample;
