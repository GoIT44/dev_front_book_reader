import styles from "./Navbar.module.css";
import { ReactComponent as BookButton } from "../../assets/svg/nav_book.svg";
import { ReactComponent as HomeButton } from "../../assets/svg/home.svg";
import authOperations from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutButton = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={styles.navbar}>
      <div>
        <p className={styles.navbarLogo}>BR</p>
      </div>
      <div className={styles.user}>
        <p className={styles.userMonogram}>
          <span className={styles.userSymbol}>N</span>
        </p>
        <p className={styles.userName}>User Name</p>
      </div>
      <div className={styles.navButtons}>
        <button className={styles.bookButton}>
          <BookButton />
        </button>
        <button className={styles.homeButton}>
          <HomeButton />
        </button>
        <span className={styles.borderLine}></span>
        <button className={styles.logoutButton} onClick={logoutButton}>
          Вихід
        </button>
        <span className={styles.borderLineBottom}></span>
      </div>
    </div>
  );
};

export default Navbar;
