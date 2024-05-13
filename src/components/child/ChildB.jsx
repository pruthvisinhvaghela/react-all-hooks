import MyContext from "./MyContext";
import MyContextTwo from "./MyContextTwo";

const ChildB = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(name) => {
          return (
            <MyContextTwo.Consumer>
              {(data) => {
                return (
                  <h1>
                    hello my name is {name} and my age is {data}
                  </h1>
                );
              }}
            </MyContextTwo.Consumer>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default ChildB;
