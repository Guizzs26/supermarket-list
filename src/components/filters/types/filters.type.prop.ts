import { ChangeEvent } from "react";
import { OrderByType } from "../../list-of-items/types/order.by.type";

export type FiltersProps = {
  orderBy: OrderByType;
  onChangeOrder: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClearList: () => void;
};
