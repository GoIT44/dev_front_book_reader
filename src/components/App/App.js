import Timer from "../Timer/Timer";
import Routes from "../../navigation/Routes";
import Navbar from "../Navbar";
import LibraryModal from "../LibraryModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";
import { token } from "../../services/auth";
import "./App.css";

import TrainingPage from "../../pages/TrainingPage/TrainingPage";
import LibraryPage from "../../pages/LibraryPage/LibraryPage";
import LibraryForm from "../LibraryForm/LibraryForm";
import { useEffect } from "react";
import { getTrainingOperations } from "../../redux/training/trainingOperations";

function App() {
  
  const jwt = useSelector(fetchToken);
  token.set(jwt);
  return (
    <div className="App">
      <Navbar />
      <Routes />
      {/* <LibraryModal />
      <LibraryForm />
      {jwt && <LibraryPage />} */}
    </div>
  );
}

export default App;
