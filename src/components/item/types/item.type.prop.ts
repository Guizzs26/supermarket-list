import { ItemEntity } from "./item.entity";

export type ItemProps = {
  item: ItemEntity;
  onDeleteItem: (id: string) => void;
  onCheckItem: (id: string) => void;
};
