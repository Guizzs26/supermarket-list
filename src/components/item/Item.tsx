import { ItemProps } from "./types/item.type.prop";

const Item = ({ item, onDeleteItem, onCheckItem }: ItemProps): JSX.Element => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onCheckItem(item.id)}
      />

      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export { Item };
