import useForm from "../../components/hooks/useForm";
import authOperations from "../../redux/auth/auth-operations";
import styles from "../LoginPage/LoginPage.module.css";
import { useDispatch } from "react-redux";
import GoodleLogo from "../../images/auth/google_icon.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { token } from "../../services/auth";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    return dispatch(
      authOperations.logIn({
        email: data.email,
        password: data.password,
      })
    );
  };
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);
  const location = useLocation();
  const tokens = location.search.slice(1).split("=")[1];
  token.set(tokens);
  console.log(location)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <a
              className={styles.googleBtn}
              href="https://api-br.herokuapp.com/api/auth/google"
            >
              <img className={styles.googleBtnLogo} src={GoodleLogo} alt="" />
              <p className={styles.googleBtnText}>Google</p>
            </a>
            <form
              className={styles.registerForm}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
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
                  Пароль <span className={styles.star}>*</span>
                </span>
                <input
                  className={styles.authInput}
                  type="password"
                  onChange={handleChange}
                  name="password"
                  required
                  placeholder="Пароль"
                  value={data.password}
                />
              </label>
              <button className={styles.registerBtn}>
                <p className={styles.registerBtnText}>Увійти</p>
              </button>
              <p className={styles.authText}>
                <Link to="/register" className={styles.authTextEnter}>
                  Реєстрація
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className={styles.addText}>
          <p className={styles.symbol}>“</p>
          <p className={styles.text}>
            Книги — это корабли мысли, странствующие по волнам времени и бережно
            несущие свой драгоценный груз от поколения к поколению.
          </p>
          <span className={styles.line}></span>
          <p className={styles.author}>Бэкон Ф.</p>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
