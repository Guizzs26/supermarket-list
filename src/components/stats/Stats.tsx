import styles from "./stats.module.css";

import { StatsProps } from "./types/stats.type.prop";

const Stats = ({ items }: StatsProps): JSX.Element => {
  if (items.length === 0) {
    return (
      <p className={styles.stats}>
        <em>Please, start by adding some items to your list 😁</em>
      </p>
    );
  }

  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);

  const singularPlural = numItems === 1 ? "item" : "items";

  return (
    <footer className={styles.stats}>
      {percentage === 100 ? (
        <p>Nice! You got everything 😎</p>
      ) : (
        <p>
          You have {numItems} {singularPlural} on your list, and you already
          packed {itemsPacked} ({percentage}%)
        </p>
      )}
    </footer>
  );
};

export { Stats };
