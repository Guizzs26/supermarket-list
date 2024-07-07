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

  return (
    <div className={styles.appContainer}>
      <Logo />
      <ListOfItems item={items} />
      <FormAddItem onAddItem={handleAddItem} />
    </div>
  );
}
