import { useState } from "react";

const Todo = () => {
  const [todo, settodo] = useState([]);

  const [input, setinput] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          settodo([...todo, input]);
          setinput("");
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>

      <div>Todos</div>
      <ul>
        {todo.map((work) => {
          return <li>{work}</li>;
        })}

        <button
          onClick={() => {
            settodo((prev) => prev.slice(0, -1));
          }}
        >
          Remove Todo
        </button>
      </ul>
    </>
  );
};

export default Todo;
