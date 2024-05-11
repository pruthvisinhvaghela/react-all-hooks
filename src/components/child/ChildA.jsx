import ChildB from "./ChildB";

const ChildA = ({ value }) => {
  return (
    <div>
      <ChildB value={value} />
    </div>
  );
};

export default ChildA;
