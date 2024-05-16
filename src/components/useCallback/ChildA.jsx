/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo } from "react";

// here we pass function as props and use memo but it is not stooping for rerender
// eslint-disable-next-line react-refresh/only-export-components
const ChildA = ({ loading, count }) => {
  console.log("childA rendered");
  return <div></div>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ChildA);
