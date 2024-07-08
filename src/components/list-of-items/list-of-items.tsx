import styles from "./ListOfItems.module.css";

import { ListOfItemsProps } from "./types/list.of.items";
import { ItemEntity } from "../item/types/item.entity";

import { Item } from "../item";

const ListOfItems = ({
  items,
  orderBy,
  onDeleteItem,
  onCheckItem,
}: ListOfItemsProps): JSX.Element => {
  let sortedItems: ItemEntity[] = [];

  switch (orderBy) {
    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    case "alphabetically":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "newest":
      sortedItems = items;
      break;
  }

  return (
    <ul className={styles.listItems}>
      {sortedItems.map((item) => (
        <Item
          item={item}
          onDeleteItem={onDeleteItem}
          onCheckItem={onCheckItem}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export { ListOfItems };
