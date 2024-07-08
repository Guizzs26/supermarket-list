import { StatsProps } from "./types/stats";

const Stats = ({ items }: StatsProps) => {
  if (items.length === 0) {
    return (
      <p>
        <em>Please, start by adding some items to your list 😁</em>
      </p>
    );
  }

  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);

  const singularPlural = numItems === 1 ? "item" : "items";

  return (
    <footer>
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
