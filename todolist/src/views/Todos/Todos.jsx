import List from "../../componentes/List/List";
import { useState, useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = useState(null);

  useEffect(function () {
    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data.slice(0, 20));
    }
    fetchTodos();
  }, []);
  console.log(todos);

  return (
    <>
      <h1>Todos views</h1>
      <br />
      <br />
      <input
        type="text
      "
      />
      <button>Add to list</button>
      <br /><br />
      <List items={todos} setState={setTodos} />
    </>
  );
}
