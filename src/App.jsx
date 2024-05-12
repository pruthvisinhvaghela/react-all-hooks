import "./App.css";
import ChildA from "./components/child/ChildA";
import MyContext from "./components/child/MyContext";
// import UseRefDemo from "./components/useRef/UseRefDemo";
// import PropsDemo from "./components/PropsDemo";
// import Test from "./components/Test";
// import UseStateObj from "./components/useState/UseStateObj";
// import UseState from "./components/useState/UseState";
function App() {
  // for cntext api we follow three thing: create, provide, consume
  const name = "pruthvi";
  return (
    <>
      <MyContext.Provider value={name}>
        <ChildA />
      </MyContext.Provider>
      {/* <UseRefDemo /> */}
      {/* <PropsDemo data={arr} /> */}
      {/* <Test /> */}
      {/* <UseState /> */}
      {/* <UseStateObj /> */}
    </>
  );
}

export default App;
