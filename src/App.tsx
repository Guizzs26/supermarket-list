import styles from "./App.module.css";

import { useItems } from "./hooks/use-items";

import { Logo } from "./components/logo/index";
import { FormAddItem } from "./components/form-add-item/index";
import { ListOfItems } from "./components/list-of-items/index";
import { Filters } from "./components/filters/index";
import { Stats } from "./components/stats/index";

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
