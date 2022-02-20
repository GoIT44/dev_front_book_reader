import { ReactComponent as ReactLogo } from "../../../images/training_page_icons/arrow-back.svg";
import styles from "./ModalCloseBtn.module.css";

const ModalCloseBtn = () => {
  return (
    <button className={styles.btn__back}>
      <div className={styles.svg__wrap}>
        <ReactLogo />
      </div>
    </button>
  );
};

export default ModalCloseBtn;
