import Timer from "../Timer/Timer";
import Routes from "../../navigation/Routes";
import Navbar from "../Navbar";
import LibraryModal from "../LibraryModal";
import { useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";
import { token } from "../../services/auth";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import authOperations from "../../redux/auth/auth-operations";
import "./App.css";

import LibraryPage from '../../pages/library/LibraryPage'

import LibraryForm from "../LibraryForm/LibraryForm";

function App() {
  const jwt = useSelector(fetchToken);
  token.set(jwt);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.CheckedIsLoginCurrentUser(token));
  // }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <LibraryModal />
      <Timer />
      <LibraryForm />
      {jwt && <LibraryPage/>}
    </div>
  );
}

export default App;
