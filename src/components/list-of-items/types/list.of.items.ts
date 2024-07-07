import { ItemEntity } from "../../item/types/item.entity";

export type ListOfItemsProps = {
  items: ItemEntity[];
  onDeleteItem: (id: string) => void;
  onToggleItem: (id: string) => void;
  onClearList: () => void;
};
