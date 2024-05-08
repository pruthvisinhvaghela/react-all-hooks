import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  function add() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <div style={{ fontSize: "20px" }}>{count}</div>
      <button
        style={{ marginRight: "50px", marginTop: "20px" }}
        onClick={() => (count === 0 ? setCount(count) : setCount(count - 1))}>
        -
      </button>
      <button onClick={add}>+</button>
    </>
  );
};

export default UseState;
