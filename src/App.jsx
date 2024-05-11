import "./App.css";
import ChildA from "./components/child/ChildA";
// import UseRefDemo from "./components/useRef/UseRefDemo";
// import PropsDemo from "./components/PropsDemo";
// import Test from "./components/Test";
// import UseStateObj from "./components/useState/UseStateObj";
// import UseState from "./components/useState/UseState";
function App() {
  const name = "pruthvi";
  return (
    <>
      <ChildA value={name} />
      {/* <UseRefDemo /> */}
      {/* <PropsDemo data={arr} /> */}
      {/* <Test /> */}
      {/* <UseState /> */}
      {/* <UseStateObj /> */}
    </>
  );
}

export default App;
