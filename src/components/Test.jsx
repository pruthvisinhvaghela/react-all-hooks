import { useState } from "react";

const Test = () => {
  const [data, setData] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
        name="fname"
        value={data}
      />
    </>
  );
};

export default Test;
