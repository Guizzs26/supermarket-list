import { ChangeEvent, useCallback, useState } from "react";

import { ItemEntity } from "../components/item/types/item.entity";
import { OrderByType } from "../components/list-of-items/types/order.by.type";

const useItems = () => {
  const [items, setItems] = useState<ItemEntity[]>([]);
  const [orderBy, setOrderBy] = useState<OrderByType>("newest");

  const handleSubmit = useCallback(
    (newItem: ItemEntity) => setItems((prev) => [...prev, newItem]),
    []
  );

  const handleChangeOrder = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      setOrderBy(e.target.value as OrderByType),
    []
  );

  const handleDeleteItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((item) => item.id !== id)),
    []
  );

  const handleClearList = useCallback(() => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );

    if (confirmed) {
      setItems([]);
    }
  }, []);

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
