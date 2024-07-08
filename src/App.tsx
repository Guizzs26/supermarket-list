import styles from "./App.module.css";

import { useItems } from "./hooks/use-items";

import { Logo } from "./components/logo/logo";
import { FormAddItem } from "./components/form-add-item/form-add-item";
import { ListOfItems } from "./components/list-of-items/list-of-items";
import { Filters } from "./components/filters/filters";
import { Stats } from "./components/stats/stats";

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
