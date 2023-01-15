export default function List({ list, onClick }) {
  function HandleClick(id) {
    const NewList = list.filter((item) => item.id !== id);
    onClick(NewList);
  }
  return (
    <ul>
      {list.map((item) => (
        <li>
          {item.title}
          <button onClick={() => HandleClick(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
