import styles from "./form-add-item.module.css";

import { ChangeEvent, FormEvent, useState } from "react";

import { ItemEntity } from "../item/types/item.entity";
import { FormAddItemProps } from "./types/form.add.item.type";

const quantities = Array.from({ length: 10 }, (_, i) => i + 1);

const FormAddItem = ({ onAddItem }: FormAddItemProps): JSX.Element => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  // Controlled Input Element
  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  // Controlled Select Element
  const handleChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description.trim() === "") return;

    const newItem: ItemEntity = {
      id: crypto.randomUUID(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addForm}>
      <h3 className={styles.tertiaryHeading}>What do you need to buy?</h3>

      <select
        value={quantity}
        onChange={handleChangeQuantity}
        className={styles.select}
      >
        {quantities.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Add item..."
        autoFocus
        value={description}
        onChange={handleChangeDescription}
        className={styles.inputText}
      />

      <button type="submit" className={styles.submitBtn}>
        Add
      </button>
    </form>
  );
};

export { FormAddItem };
