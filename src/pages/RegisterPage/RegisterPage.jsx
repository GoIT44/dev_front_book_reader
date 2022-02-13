import useForm from "../../components/hooks/useForm";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import authOperations from "../../redux/auth/auth-operations";
import styles from "../RegisterPage/RegisterPage.module.css";
import { useDispatch } from "react-redux";
import InfoPage from "../InfoPage";
import GoodleLogo from "../../images/auth/google_icon.png";
import { Link } from "react-router-dom";
import useMedia from "../../components/hooks";

const initialState = {
  email: "",
  password: "",
  passwordCheck: "",
};
const RegisterForm = () => {
  const isDesc = useMedia.useMedia().DESK;
  const isTabl = useMedia.useMedia().TABL;
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    if (values.password === values.passwordCheck) {
      return dispatch(
        authOperations.register({
          email: values.email,
          password: values.password,
        })
      );
    }
    Notify.failure("Password doesn't match");
  };
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <form
              className={styles.registerForm}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <button className={styles.googleBtn}>
                <img className={styles.googleBtnLogo} src={GoodleLogo} alt="" />
                <p className={styles.googleBtnText}>Google</p>
              </button>
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  Ім’я <span className={styles.star}>*</span>
                </span>
                <input
                  type="text"
                  className={styles.authInput}
                  onChange={handleChange}
                  name="name"
                  required
                  placeholder="..."
                  value={data.name}
                />
              </label>
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  Електронна адреса <span className={styles.star}>*</span>
                </span>
                <input
                  type="email"
                  title="username@userEmail.net"
                  className={styles.authInput}
                  onChange={handleChange}
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={data.email}
                />
              </label>
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  {" "}
                  Пароль <span className={styles.star}>*</span>
                </span>
                <input
                  className={styles.authInput}
                  type="password"
                  onChange={handleChange}
                  name="password"
                  required
                  placeholder="..."
                  value={data.password}
                />
              </label>
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  Підтвердити пароль <span className={styles.star}>*</span>
                </span>
                <input
                  className={styles.authInput}
                  type="password"
                  onChange={handleChange}
                  name="checkPassword"
                  required
                  placeholder="..."
                  value={data.checkPassword}
                />
              </label>
              <button className={styles.registerBtn}>
                <p className={styles.registerBtnText}>Зареєструватися</p>
              </button>
              <p className={styles.authText}>
                Вже з нами?
                <Link to="/login" className={styles.authTextEnter}>
                  Увійти
                </Link>
              </p>
            </form>
          </div>
        </div>
        {(isDesc || isTabl) && <InfoPage />}
      </div>
    </>
  );
};
export default RegisterForm;
