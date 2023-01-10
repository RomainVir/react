import "./styles.css";
import { useState } from "react";

export default function App() {
  const [newStudent, setNewStudent] = useState("");
  const [students, setStudents] = useState([]);
  const [studentToRemove, setStudentToRemove] = useState("");
  const [hasStudent, setHasStudent] = useState(true);

  function addNewStudent(e) {
    setNewStudent(e.target.value);
  }

  function addStudentToList(e) {
    e.preventDefault();
    if (newStudent === "") {
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent("");
  }

  function getStudentToRemove(e) {
    setStudentToRemove(e.target.value);
  }

  function removeStudent(e) {
    e.preventDefault();
    if (students.includes(studentToRemove)) {
      const newStudentList = students.filter(
        (student) => student !== studentToRemove
      );
      setStudents(newStudentList);
      setHasStudent(true);
    }
    setHasStudent(false);
  }

  return (
    <div className="App">
      <h1>Releevant students</h1>
      <form onSubmit={addStudentToList}>
        <input value={newStudent} onChange={addNewStudent} />
        <br />
        <br />
        <button>Añadir estudiante</button>
      </form>
      <ul>
        {students.length === 0 ? (
          <h3>No hay estudiantes en la lista</h3>
        ) : (
          students.map((student) => <li key={student}>{student}</li>)
        )}
      </ul>
      <form onSubmit={removeStudent}>
        <input value={studentToRemove} onChange={getStudentToRemove} />
        <br />
        <br />
        <button>Eliminar estudiante</button>
      </form>
      {!hasStudent && <h3>No existe ese estudiante</h3>}
    </div>
  );
}

//students.length === 0 ---> true o false
