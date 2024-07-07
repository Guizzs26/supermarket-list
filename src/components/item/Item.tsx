import { ItemProps } from "./types/item";

export default function Item({ item }: ItemProps) {
  return (
    <li>
      <input type="checkbox" checked={item.isCompleted} />

      <span>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}
