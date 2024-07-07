import { useState } from "react";

import styles from "./App.module.css";

import { ItemEntity } from "./components/item/types/item.entity";

import Logo from "./components/logo/Logo";
import FormAddItem from "./components/form-add-item/FormAddItem";
import ListOfItems from "./components/list-of-items/ListOfItems";

export default function App() {
  const [items, setItems] = useState<ItemEntity[]>([]);

  const handleAddItem = (newItem: ItemEntity) => {
    setItems((items) => [...items, newItem]);
  };

  const handleDeleteItem = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id: string) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, item: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className={styles.appContainer}>
      <Logo />
      <ListOfItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <FormAddItem onAddItem={handleAddItem} />
    </div>
  );
}
