import useForm from "../../components/hooks/useForm";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import authOperations from "../../redux/auth/auth-operations";
import styles from "../RegisterPage/RegisterPage.module.css";
import { useDispatch } from "react-redux";
import InfoPage from "../InfoPage";
import GoodleLogo from "../../images/auth/google_icon.png";
import { Link } from "react-router-dom";
import useMedia from "../../components/hooks";
import { useLocation, useHistory } from "react-router-dom";
import { token } from "../../services/auth";

const initialState = {
  email: "",
  password: "",
  passwordCheck: "",
  name: "",
};
const RegisterForm = () => {
  const isDesc = useMedia.useMedia().DESK;
  const isTabl = useMedia.useMedia().TABL;
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (values) => {
    if (values.password === values.passwordCheck) {
      dispatch(
        authOperations.register({
          email: data.email,
          password: data.password,
          name: data.name,
        })
      );
      history.push("/login");
      return;
    }
    Notify.failure("Password doesn't match");
  };

  const googleAuth = () => {
    dispatch(authOperations.googleLogin());
  };

  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);
  const location = useLocation();
  const tokens = location.search.slice(1).split("=")[1];
  token.set(tokens);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <a
              className={styles.googleBtn}
              href="https://api-br.herokuapp.com/api/auth/google"
              onClick={googleAuth}
            >
              <img className={styles.googleBtnLogo} src={GoodleLogo} alt="" />
              <p className={styles.googleBtnText}>Google</p>
            </a>
            <form
              className={styles.registerForm}
              onSubmit={handleSubmit}
              autoComplete="on"
            >
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  ????????? <span className={styles.star}>*</span>
                </span>
                <input
                  type="text"
                  className={styles.authInput}
                  onChange={handleChange}
                  name="name"
                  required
                  placeholder="..."
                  value={data.name}
                  pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
                />
              </label>
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  ???????????????????? ???????????? <span className={styles.star}>*</span>
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
                  pattern="[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*"
                />
              </label>
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  {" "}
                  ???????????? <span className={styles.star}>*</span>
                </span>
                <input
                  className={styles.authInput}
                  type="password"
                  onChange={handleChange}
                  name="password"
                  required
                  placeholder="..."
                  value={data.password}
                  // minlength="8"
                  // pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+"
                  title="?????????????? ?????????????? 8 ????????????????, ?????????????????????? ???????????? ???????????????????????????? ?????????? ?? ?????????? ?????????????? ????????????????"
                />
              </label>
              <label className={styles.registerInput}>
                <span className={styles.registerInputname}>
                  ?????????????????????? ???????????? <span className={styles.star}>*</span>
                </span>
                <input
                  className={styles.authInput}
                  type="password"
                  onChange={handleChange}
                  name="passwordCheck"
                  required
                  placeholder="..."
                  value={data.passwordCheck}
                  // pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+"
                  title="?????????????? ?????????????? 8 ????????????????, ?????????????????????? ???????????? ???????????????????????????? ?????????? ?? ?????????? ?????????????? ????????????????"
                />
              </label>
              <button className={styles.registerBtn}>
                <p className={styles.registerBtnText}>??????????????????????????????</p>
              </button>
              <p className={styles.authText}>
                ?????? ?? ?????????
                <Link to="/login" className={styles.authTextEnter}>
                  ????????????
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
