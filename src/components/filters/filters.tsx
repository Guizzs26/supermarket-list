import styles from "./filters.module.css";

import { FiltersProps } from "./types/filters.type.prop";

const Filters = ({
  orderBy,
  onChangeOrder,
  onClearList,
}: FiltersProps): JSX.Element => {
  return (
    <div className={styles.actions}>
      <select
        value={orderBy}
        onChange={onChangeOrder}
        className={styles.select}
      >
        <option value="newest">Sort by most recent</option>
        <option value="packed">Sort by packed items</option>
        <option value="alphabetically">Order by alphabetically order</option>
      </select>

      <button onClick={onClearList} className={styles.clearBtn}>
        Clear List
      </button>
    </div>
  );
};

export { Filters };
