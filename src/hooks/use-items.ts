import { ChangeEvent, useCallback, useState } from "react";

import { ItemEntity } from "../components/item/types/item.entity";

const useItems = () => {
  const [items, setItems] = useState<ItemEntity[]>([]);
  const [orderBy, setOrderBy] = useState<string>("newest");

  const handleSubmit = useCallback(
    (newItem: ItemEntity) => setItems((prev) => [...prev, newItem]),
    []
  );

  const handleChangeOrder = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setOrderBy(e.target.value),
    []
  );

  const handleDeleteItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((item) => item.id !== id)),
    []
  );

  const handleClearList = useCallback(() => setItems([]), []);

  const handleCheckItem = useCallback(
    (id: string) =>
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
      ),
    []
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
