import { useState } from "react";

export default function Form({ onSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  console.log(onSubmit);
  function handleInput(e) {
    setNewTodo(e.target.value);
  }
  return (
    <form
      onSubmit={(e) => onSubmit(e, newTodo)}
      className="form-group container"
    >
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Add a new task"
        value={newTodo}
        onChange={handleInput}
      />
    </form>
  );
}
