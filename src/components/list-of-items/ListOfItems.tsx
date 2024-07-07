import styles from "./ListOfItems.module.css";

import { ListOfItemsProps } from "./types/list.of.items";
import Item from "../item/Item";

export default function ListOfItems({
  items,
  onDeleteItem,
  onToggleItem,
}: ListOfItemsProps) {
  return (
    <ul className={styles.listItems}>
      {items.map((item, index) => (
        <Item
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          key={index}
        />
      ))}
    </ul>
  );
}
