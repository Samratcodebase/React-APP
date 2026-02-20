const Weather = ({ teamperature }) => {
  let message;

  if (teamperature < 15) {
    message = "It's Cold Outside";
  } else if (teamperature <= 25) {
    message = "It's Nice Outside";
  } else {
    message = "It's Hot Outside";
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Weather;
