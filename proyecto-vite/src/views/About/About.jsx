import "../About/Aboutus.css";
///import team from "../../assets/team.jpeg";
export default function About() {
  const [todos, setTodos] = useState(todoList);
  return (
    <>
      <h1>Esto es About</h1>
      <List list={todos} onClick={setTodos} />
    </>
  );
}
