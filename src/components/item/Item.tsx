import styles from "./Item.module.css";

import { ItemProps } from "./types/item";

const Item = ({ item, onDeleteItem, onCheckItem }: ItemProps) => {
  return (
    <li className={styles.listItems}>
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
