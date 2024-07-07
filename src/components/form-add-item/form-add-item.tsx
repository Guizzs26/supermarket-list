import styles from "./form-add-item.module.css";

import { ChangeEvent, FormEvent, useState } from "react";
import { FormAddItemProps } from "./types/form.add.item.type";

const quantities = Array.from({ length: 10 }, (_, i) => i + 1);

const FormAddItem = ({ onAddItem }: FormAddItemProps): JSX.Element => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  // Controlled Input Element
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  // Controlled Select Element
  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description.trim() === "") return;

    const newItem = {
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

      <select value={quantity} onChange={handleQuantityChange}>
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
        onChange={handleDescriptionChange}
        className={styles.inputText}
      />

      <button type="submit" className={styles.submitBtn}>
        Add
      </button>
    </form>
  );
};

export { FormAddItem };
