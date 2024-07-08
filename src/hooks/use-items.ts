import { ChangeEvent, useCallback, useState } from "react";
import { ItemEntity } from "../components/item/types/item.entity";

const useItems = () => {
  const [items, setItems] = useState<ItemEntity[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [orderBy, setOrderBy] = useState<string>("newest");

  const updateItems = (newItems: ItemEntity[]) => {
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const handleSubmit = useCallback(
    (newItem: ItemEntity) => updateItems([...items, newItem]),
    [items]
  );

  const handleChangeOrder = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setOrderBy(e.target.value),
    []
  );

  const handleDeleteItem = useCallback(
    (id: string) => {
      const filteredItems = items.filter((item) => item.id !== id);

      updateItems(filteredItems);
    },
    [items]
  );

  const handleClearList = useCallback(() => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );

    if (confirmed) {
      updateItems([]);
    }
  }, []);

  const handleCheckItem = useCallback(
    (id: string) => {
      const toggledItems = items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );

      updateItems(toggledItems);
    },
    [items]
  );

  return {
    items,
    orderBy,
    handleSubmit,
    handleChangeOrder,
    handleDeleteItem,
    handleClearList,
    handleCheckItem,
  };
};

export { useItems };
