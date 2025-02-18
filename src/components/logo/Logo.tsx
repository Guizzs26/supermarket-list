import styles from "./logo.module.css";

const Logo = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <img
        src="shopping-cart.png"
        alt="An illustration of a person shopping"
        className={styles.imgLogo}
      />
      <h1 className={styles.primaryHeading}>Grocery List</h1>
    </header>
  );
};

export { Logo };
