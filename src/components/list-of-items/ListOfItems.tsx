import { ChangeEvent, useState } from "react";
import styles from "./ListOfItems.module.css";

import { ItemEntity } from "../item/types/item.entity";
import { ListOfItemsProps } from "./types/list.of.items";

import Item from "../item/Item";

export default function ListOfItems({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList, // Add this line
}: ListOfItemsProps) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: ItemEntity[] = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

  const handleChangeSelectElement = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="list">
      <ul className={styles.listItems}>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div>
        <select value={sortBy} onChange={handleChangeSelectElement}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
