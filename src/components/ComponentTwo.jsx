export const ComponentTwo = ({ count, handeler }) => {
  const Handeler = () => {
    handeler();
  };
  return (
    <>
      <button onClick={Handeler}>Click to Change the Form Component Two</button>
    </>
  );
};
export default ComponentTwo;
