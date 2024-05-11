import { useRef, useState } from "react";

const UseRefDemo = () => {
  const useRefDemo = useRef("");
  //   console.log(useRefDemo);

  const [name, setName] = useState("pruthvi");
  console.log(name);
  function Reset() {
    setName("");
    useRefDemo.current.focus();
  }

  function handleChange() {
    useRefDemo.current.style.color = "red";
  }
  return (
    <div>
      <input
        ref={useRefDemo}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <br />
      <br />
      <button onClick={Reset}>reset</button>
      <button onClick={handleChange}>color change</button>
    </div>
  );
};

export default UseRefDemo;
