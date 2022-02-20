import authOperations from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import s from "../LogoutModal/LogoutModal.module.css";

const LogoutModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const logoutButton = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div>
      <div className={s.logoutModal}>
        <div className={s.textTitle}>
          <p className={s.textModalOuth}>
            Якщо Ви вийдете з програми незбережені дані будуть втрачені
          </p>
        </div>
        <div className={s.btngrp}>
          <button className={s.btnNotLogout} onClick={closeModal}>
            Відміна
          </button>
          <button
            className={s.btnLogout}
            onClick={() => {
              logoutButton();
              closeModal();
            }}
          >
            Вийти
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
