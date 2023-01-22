import { useState, useEffect } from "react";
import Form from "../../componentes/Form/Form";
import { v4 as uuid } from "uuid";

import List from "../../componentes/List/List";

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

  function onSubmit(e, titleTodo) {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: titleTodo,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <h1>Todos view</h1>
      <Form setState={setTodos} onSubmit={onSubmit} />
      <List items={todos} setState={setTodos} />
    </>
  );
}
