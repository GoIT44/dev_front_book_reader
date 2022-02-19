// import Timer from "../Timer/Timer";
// import Routes from "../../navigation/Routes";
// import Navbar from "../Navbar";
// import LibraryModal from "../LibraryModal";
// import { useSelector } from "react-redux";
// import { fetchToken } from "../../redux/auth/auth-selectors";
// import { token } from "../../services/auth";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import authOperations from "../../redux/auth/auth-operations";
import "./App.css";

// import LibraryForm from "../LibraryForm/LibraryForm";
import TrainingPage from "../../pages/TrainingPage/TrainingPage";

function App() {
  // const jwt = useSelector(fetchToken);
  // token.set(jwt);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.CheckedIsLoginCurrentUser(token));
  // }, []);
  return (
    <div className="App">
      {/* <Navbar />
      <Routes />
      <LibraryModal />
      <Timer />
      <LibraryForm /> */}
      <TrainingPage />
    </div>
  );
}

export default App;
