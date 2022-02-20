import styles from "./Navbar.module.css";
import { ReactComponent as BookButton } from "../../assets/svg/nav_book.svg";
import { ReactComponent as HomeButton } from "../../assets/svg/home.svg";
import { useState } from "react";
import LogoutModal from "../LogoutModal";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { Avatar } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useSelector(getUserName);
  const onCLick = () => {
    setIsOpen(!isOpen);
  };
  const isAuth = useAuth();

  return (
    <div className={styles.navbar}>
      <div>
        <p className={styles.navbarLogo}>BR</p>
      </div>
      {isAuth && (
        <>
          <div className={styles.user}>
            <Avatar className={styles.userMonogram}>
              {userName.slice(0, 1)}
            </Avatar>
            <p className={styles.userName}>{userName}</p>
          </div>
          <div className={styles.navButtons}>
            <Link to="/library" className={styles.bookButton}>
              <BookButton />
            </Link>
            <Link to="/statistic" className={styles.homeButton}>
              <HomeButton />
            </Link>
            <span className={styles.borderLine}></span>
            <button className={styles.logoutButton} onClick={onCLick}>
              Вихід
            </button>
          </div>
        </>
      )}
      {isOpen && (
        <Modal closeModal={onCLick}>
          <LogoutModal closeModal={onCLick} />
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
