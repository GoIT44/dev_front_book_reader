// import Timer from "../Timer/Timer";
import Routes from "../../navigation/Routes";
import Navbar from "../Navbar";
import LibraryModal from "../LibraryModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";
import { token } from "../../services/auth";
import Spinner from "../Spinner/Spinner";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import authOperations from "../../redux/auth/auth-operations";
import "./App.css";

import TrainingPage from "../../pages/TrainingPage/TrainingPage";
import LibraryPage from "../../pages/LibraryPage/LibraryPage";
import LibraryForm from "../LibraryForm/LibraryForm";
import LibraryList from "../Library/LibraryList/LibraryList";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/books/booksOperations";

function App() {

  const jwt = useSelector(fetchToken);
  token.set(jwt);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchBooks())
  })
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Spinner/>
      <LibraryModal />
      <LibraryForm />
      <LibraryList/>
      <TrainingPage />
      {jwt && <LibraryPage />}
    </div>
  );
}

export default App;
