import { ItemProps } from "./types/item";

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => onToggleItem(item.id)}
      />

      <span>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
