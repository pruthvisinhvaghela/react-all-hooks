import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [data, setData] = useState(0);
  const [dataTwo, setDataTwo] = useState(100);

  useEffect(() => {
    console.log("component mounted");
  }, [dataTwo]);
  return (
    <>
      <h1>you clicked {data} times</h1>
      <br />
      <h2>your decrease value {dataTwo}</h2>
      <button
        onClick={() => {
          setData(data + 1);
        }}>
        click me{" "}
      </button>

      <button
        onClick={() => {
          setDataTwo(dataTwo > 0 ? dataTwo - 1 : 0);
        }}>
        click for decrease value
      </button>
    </>
  );
};

export default UseEffectDemo;
