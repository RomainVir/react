import ListItem from "../ListItem/ListItem";

export default function List({ items, setState }) {
  function removeItem(e, id) {
    e.stopPropagation(); // pour cliquer que sur une case
    setState(items.filter((item) => item.id !== id));
  }

  function toogleState(index) {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setState(newItems);
  }
  return (
    <>
      {items ? (
        <ul className="list-group container">
          {items.map((item, index) => (
            <ListItem
              setState={removeItem}
              key={item.id}
              item={item}
              toogleState={toogleState}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <h3>Cargando...</h3>
      )}
    </>
  );
}
