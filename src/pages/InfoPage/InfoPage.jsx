import styles from "./InfoPage.module.css";
import useMedia from "../../components/hooks";
import { ReactComponent as MarkerList } from "../../images/auth/vector.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const InfoPage = () => {
  const isMobile = useMedia.useMedia().MOB;
  const history = useHistory();
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Books Reading</h1>
      <h2 className={styles.list_title}>Допоможе вам</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <MarkerList className={styles.vector} />
          <p className={styles.list_item_text}>
            Швидше сформулювати свою ціль і розпочати читати
          </p>
        </li>
        <li className={styles.list_item}>
          <MarkerList className={styles.vector} />
          <p className={styles.list_item_text}>
            Пропорційно розподілити навантаження на кожний день
          </p>
        </li>
        <li className={styles.list_item}>
          <MarkerList className={styles.vector} />
          <p className={styles.list_item_text}>Відстежувати особистий успіх </p>
        </li>
      </ul>
      <h2 className={styles.list_title}>Також ви зможете</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <MarkerList className={styles.vector} />
          <p className={styles.list_item_text}>
            Формувати особисту думку незалежну від інших
          </p>
        </li>
        <li className={styles.list_item}>
          <MarkerList className={styles.vector} />
          <p className={styles.list_item_text}>
            Підвищити свої професійні якості опираючись на нові знання
          </p>
        </li>
        <li className={styles.list_item}>
          <MarkerList className={styles.vector} />
          <p className={styles.list_item_text}>Стати цікавим співрозмовником</p>
        </li>
      </ul>
      {isMobile && (
        <div className={styles.InfoPageBtn}>
          <button
            className={styles.BtnSignIn}
            onClick={() => {
              history.push("/login");
            }}
          >
            Увійти
          </button>
          <button
            className={styles.BtnSignUp}
            onClick={() => {
              history.push("/register");
            }}
          >
            Реєстрація
          </button>
        </div>
      )}
    </div>
  );
};
export default InfoPage;
