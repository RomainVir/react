import List from "../../componentes/List/List";
import { useState, useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addToDo(e) {
    setNewTodo(e.target.value);
  }

  function addToDoInList(e) {
    e.preventDefault();
    const newTask = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
      userId: 1,
    };

    /*if (newTodo === "") {
      return;*/

    setTodos([...todos, newTask]);
    setNewTodo("");
  }
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
      <form onSubmit={addToDoInList}></form>
      <input value={newTodo} onChange={addToDo} />
      <button onClick={addToDo}> Add to list</button>
      <br />
      <br />
      <List items={todos} setState={setTodos} />
    </>
  );
}
