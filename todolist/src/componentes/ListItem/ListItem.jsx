export default function ListItem({ item, setState, toogleState, index }) {
  return (
    <li
      onClick={() => toogleState(index)}
      className={`list-group-item d-flex justify-content-between ${
        item.completed && "list-group-item-dark "
      }`}
    >
      <span className={`${item.completed} && "text-decoration-line-trough"}`}>
        {item.title}
      </span>
      <button onClick={(e) => setState(e, item.id)} className="btn btn-danger">
        X
      </button>
    </li>
  );
}
