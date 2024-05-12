import MyContext from "./MyContext";
import { useContext } from "react";
const ChildB = () => {
  const name = useContext(MyContext);
  return (
    <div>
      <div>outer name is {name}</div>
      <MyContext.Consumer>
        {(name) => {
          return (
            <>
              <h1>hello my name is {name} </h1>
            </>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default ChildB;
