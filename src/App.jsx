import "./App.css";
import PropsDemo from "./components/PropsDemo";
// import Test from "./components/Test";
// import UseStateObj from "./components/useState/UseStateObj";
// import UseState from "./components/useState/UseState";
function App() {
  const arr = [1, 2, 3, 3, 2, 34, 4];
  return (
    <>
      <PropsDemo data={arr} />
      {/* <Test /> */}
      {/* <UseState /> */}
      {/* <UseStateObj /> */}
    </>
  );
}

export default App;
