import "./App.css";

import UseCallbackDemo from "./components/useCallback/UseCallbackDemo";
// import UseMemoExample from "./components/useMemo/UseMemoExample";
// import { createContext } from "react";
// import ChildOne from "./components/useContext/ChildOne";
// import ChildA from "./components/child/ChildA";
// import MyContext from "./components/child/MyContext";
// import MyContextTwo from "./components/child/MyContextTwo";
// import MycontextTwo from "./components/child/MyContextTwo";
// import UseRefDemo from "./components/useRef/UseRefDemo";
// import PropsDemo from "./components/PropsDemo";
// import Test from "./components/Test";
// import UseEffectDemo from "./components/useEffect/UseEffectDemo";
// import UseStateObj from "./components/useState/UseStateObj";
// import UseState from "./components/useState/UseState";

// const data = createContext();
// const data1 = createContext();
function App() {
  // // for context api we follow three thing: create, provide, consume
  // const name = "pruthvi";
  // const age = 23;
  return (
    <>
      <UseCallbackDemo />
      {/* <UseMemoExample /> */}
      {/* <UseEffectDemo /> */}
      {/* <data.Provider value={name}>
        <data1.Provider value={age}>
          <ChildOne />
        </data1.Provider>
      </data.Provider> */}
      {/* above is for new useContext and bellow is for create context  */}
      {/* <MyContext.Provider value={name}>
        <MyContextTwo.Provider value={age}>
          <ChildA />
        </MyContextTwo.Provider>
      </MyContext.Provider> */}
      {/* <UseRefDemo /> */}
      {/* <PropsDemo data={arr} /> */}
      {/* <Test /> */}
      {/* <UseState /> */}
      {/* <UseStateObj /> */}
    </>
  );
}

export default App;
// export { data, data1 };
