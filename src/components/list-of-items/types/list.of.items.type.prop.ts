import { ItemEntity } from "../../item/types/item.entity";
import { OrderByType } from "./order.by.type";

export type ListOfItemsProps = {
  items: ItemEntity[];
  orderBy: OrderByType;
  onDeleteItem: (id: string) => void;
  onCheckItem: (id: string) => void;
};
