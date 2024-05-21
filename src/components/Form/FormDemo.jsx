const FormDemo = () => {
  const search = (event) => {
    event.preventDefault();
    const dataValue = event.target.query.value;
    console.log(dataValue);
    alert(`your name is ${dataValue}`);
  };
  return (
    <form onSubmit={search}>
      <input type="text" name="query" />

      <button type="submit">submit</button>
    </form>
  );
};

export default FormDemo;
