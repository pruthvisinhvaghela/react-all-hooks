import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(121);

  const multiplyAns = useMemo(
    function multiply() {
      console.log("multiply is run ");
      return add * 2;
    },
    [add]
  );

  return (
    <>
      add value is: {add}
      <button
        onClick={() => {
          setAdd(add + 1);
        }}>
        add
      </button>
      <br />
      sub value is {sub}
      <button
        onClick={() => {
          setSub(sub - 1);
        }}>
        sub
      </button>
      multiplication of the value is {multiplyAns}
    </>
  );
};

export default UseMemoExample;
