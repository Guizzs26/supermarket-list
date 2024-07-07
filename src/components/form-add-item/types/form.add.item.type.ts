import { ItemEntity } from "../../item/item.entity";

export type FormAddItemProps = {
  onAddItem: (newItem: ItemEntity) => void;
};
