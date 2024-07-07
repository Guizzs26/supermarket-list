import { useState } from "react";

import styles from "./App.module.css";

import { ItemEntity } from "./components/item/item.entity";

import Logo from "./components/logo/Logo";
import FormAddItem from "./components/form-add-item/FormAddItem";

export default function App() {
  const [item, setItem] = useState<ItemEntity[]>([]);

  const handleAddItem = (newItem: ItemEntity) => {
    setItem((items) => [...items, newItem]);
  };

  return (
    <div className={styles.appContainer}>
      <Logo />
      <FormAddItem onAddItem={handleAddItem} />
    </div>
  );
}
