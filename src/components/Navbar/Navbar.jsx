import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <p className={styles.navbarLogo}>BR</p>
      </div>
    </div>
  );
};

export default Navbar;
