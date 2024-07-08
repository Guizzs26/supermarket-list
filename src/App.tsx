import styles from "./App.module.css";

import { useItems } from "./hooks/use-items";

import { Logo } from "./components/logo/Logo.tsx";
import { FormAddItem } from "./components/form-add-item/Form-add-item.tsx";
import { ListOfItems } from "./components/list-of-items/List-of-items.tsx";
import { Filters } from "./components/filters/Filter.tsx";
import { Stats } from "./components/stats/Stats.tsx";

export default function App() {
  const state = useItems();

  return (
    <div className={styles.appContainer}>
      <Logo />

      <FormAddItem onAddItem={state.handleSubmit} />

      <div className={styles.list}>
        <ListOfItems
          items={state.items}
          orderBy={state.orderBy}
          onDeleteItem={state.handleDeleteItem}
          onCheckItem={state.handleCheckItem}
        />
        <Filters
          orderBy={state.orderBy}
          onChangeOrder={state.handleChangeOrder}
          onClearList={state.handleClearList}
        />
      </div>

      <Stats items={state.items} />
    </div>
  );
}
