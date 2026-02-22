const ComponentOne = ({ count, handeler }) => {
  const Handeler = () => {
    handeler();
  };

  return (
    <>
   
      <button onClick={Handeler}> Click To Change From Component One </button>
    </>
  );
};

export default ComponentOne;
