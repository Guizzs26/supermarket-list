import styles from "./App.module.css";

import Logo from "./components/logo/Logo";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Logo />
    </div>
  );
}
