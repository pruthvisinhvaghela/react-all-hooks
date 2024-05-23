const List = () => {
  const iplTeam = ["csk", "GT", "RCB", "KKR", "RR"];
  const result = iplTeam.map((item, index) => (
    //key should be unique and it is good if you use a index of array in map
    <div key={index}>
      <div>{item}</div>
    </div>
  ));
  return <>{result}</>;
};

export default List;
