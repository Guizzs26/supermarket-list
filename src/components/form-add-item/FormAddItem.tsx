import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./FormAddItem.module.css";

import { FormAddItemProps } from "./types/form.add.item.type";

export default function FormAddItem({ onAddItem }: FormAddItemProps) {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description.trim() === "") return;

    const newItem = {
      id: crypto.randomUUID(),
      description,
      quantity,
      isCompleted: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(0);
  };

  const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleChangeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addForm}>
      <h3 className={styles.tertiaryHeading}>What do you need to buy?</h3>

      <select value={quantity} onChange={handleChangeSelectValue}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Add item here"
        autoFocus
        value={description}
        onChange={handleChangeInputText}
        className={styles.inputText}
      />

      <button type="submit" className={styles.submitBtn}>
        Add
      </button>
    </form>
  );
}
