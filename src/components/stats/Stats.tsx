import { StatsProps } from "./types/stats";

export default function Stats({ items }: StatsProps) {
  if (items.length === 0)
    return (
      <p>
        <em>Please, start by adding some items to your list 😁</em>
      </p>
    );

  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.isCompleted).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer>
      You have ${numItems} on your list, and you already packed ${itemsPacked}{" "}
      (%{percentage}%)
    </footer>
  );
}
