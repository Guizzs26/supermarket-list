import { ItemEntity } from "../../item/types/item.entity";

export type FormAddItemProps = {
  onAddItem: (newItem: ItemEntity) => void;
};
