const Counter = ({ Count, SetValue }) => {
  const Handeler = () => {
    SetValue();
  };

  return <button onClick={Handeler}>Counter</button>;
};

export default Counter;
