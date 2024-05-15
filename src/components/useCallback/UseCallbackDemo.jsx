import { useCallback, useState } from "react";
import ChildA from "./ChildA";
const UseCallbackDemo = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loading = useCallback(() => {
    // some code , [] it is  very important
  }, [count]); //[] rerender the component only work
  //   const loading = () => {
  //     //some code we pass this function as props
  //   };
  return (
    <>
      <h1>Learn how to use useCallback</h1>
      <br />
      <br />
      <h4>{add}</h4> <br /> <br />
      <button
        onClick={() => {
          setAdd(add + 1);
        }}>
        addition
      </button>
      <ChildA loading={loading} count={count} />
      <br />
      <h3>count result is {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        count{" "}
      </button>
    </>
  );
};

export default UseCallbackDemo;
