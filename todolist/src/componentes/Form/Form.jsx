import { useState } from "react";

export default function Form({ setState, state, onSubmit }) {
  function handleInput(e) {
    setState(e.target.value);
  }

  return (
    <form onSubmit={(e) => onSubmit(e, state)} className="form-group container">
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Introducir un nuevo To-do"
        value={state}
        onChange={handleInput}
      />
    </form>
  );
}