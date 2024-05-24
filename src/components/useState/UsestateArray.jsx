import { useState } from "react";

const UsestateArray = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  const handleClick = () => {
    //   in below using [] and then add inside [{}]
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random(),
      },
    ]);
  };
  return (
    <>
      <h1>all items</h1>

      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>

      <button onClick={handleClick}>add item</button>
    </>
  );
};

export default UsestateArray;
