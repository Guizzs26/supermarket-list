import { FiltersProps } from "./types/filters.type.prop";

const Filters = ({
  orderBy,
  onChangeOrder,
  onClearList,
}: FiltersProps): JSX.Element => {
  return (
    <div>
      <select value={orderBy} onChange={onChangeOrder}>
        <option value="newest">Sort by most recent</option>
        <option value="stored">Sort by packed items</option>
        <option value="alphabetically">Order by alphabetically order</option>
      </select>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
};

export { Filters };
