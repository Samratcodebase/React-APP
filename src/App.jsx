import { useState } from "react";
import ComponentOne from "./components/Component";
import ComponentTwo from "./components/ComponentTwo";
import Counter from "./components/Counter";

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
        <Counter Count={Count} SetValue={SetValue} />
      </main>
    </>
  );
};

export default App;
