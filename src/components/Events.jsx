const Click = () => {
  function handleTheClick() {
    console.log("Clicked");
  }

  return (
    <>
      <button onClick={handleTheClick}>Click</button>
    </>
  );
};

export default Click;
