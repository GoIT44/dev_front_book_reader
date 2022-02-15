import Timer from "../Timer/Timer";
import Routes from "../../navigation/Routes";
import Navbar from "../Navbar";
import LibraryModal from '../LibraryModal';
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";
import { token } from "../../services/auth";
import { useEffect } from "react";
import authOperations from "../../redux/auth/auth-operations";
import "./App.css";

function App() {
  const jwt = useSelector(fetchToken);
  token.set(jwt);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.CheckedIsLoginCurrentUser(token));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes />
      </header>
      <LibraryModal/>
      <Timer />
    </div>

  );
}

export default App;
