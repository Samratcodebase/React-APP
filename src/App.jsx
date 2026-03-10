import { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("white");

  const colors = ["red", "green", "blue"];

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {colors.map((color) => (
        <button key={color} onClick={() => setBgColor(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default App;
