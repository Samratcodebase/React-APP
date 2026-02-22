import { useState } from "react";
import ComponentOne from "./components/Component";
import ComponentTwo from "./components/ComponentTwo";

const App = () => {
  const [Count, setCount] = useState(0);

  const SetValue = () => {
    setCount(Count + 1);
  };
  console.log(Count);

  return (
    <>
      <div>Count Value:{Count}</div>

      <main>
        <ComponentTwo count={Count} handeler={SetValue} />
        <ComponentOne count={Count} handeler={SetValue} />
      </main>
    </>
  );
};

export default App;
