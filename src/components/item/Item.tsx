import { ItemProps } from "./types/item";

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => onToggleItem(item.id)}
      />

      <span
        style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
      >
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
