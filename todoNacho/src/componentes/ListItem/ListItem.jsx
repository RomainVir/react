export default function ListItem({ item, setState, rayer, index }) {
  return (
    <li
      onClick={() => rayer(index)}
      className={`list-group-item d-flex justify-content-between ${
        item.completed && "list-group-item-dark"
      }`}
    >
      <span className={`${item.completed} && "text-decoration-line-through}`}>
        {item.title}
      </span>
      <button onClick={(e) => setState(e, item.id)} className="btn btn-danger">
        X
      </button>
    </li>
  );
}
