const Greeting = ({ timeOfDay }) => {
  let msg = "";
  timeOfDay == "morning" ? (msg = `Good ${timeOfDay}`) : (msg = `Good after`);

  return (
    <>
      <h1>{msg}</h1>
    </>
  );
};

export default Greeting;
