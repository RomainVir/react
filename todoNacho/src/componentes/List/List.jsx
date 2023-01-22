import ListItem from "../ListItem/ListItem";

export default function List({ items, setState }) {
  function removeItem(e, id) {
    e.stopPropagation();

    setState(items.filter((item) => item.id !== id));
  }

  function rayer(index) {
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
              rayer={rayer}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
