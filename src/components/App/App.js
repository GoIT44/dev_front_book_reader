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

import {getUsersBooksOperation} from '../../redux/operations/bookOperation'
import TrainingPage from "../../pages/TrainingPage/TrainingPage";
import LibraryPage from "../../pages/LibraryPage/LibraryPage";
import LibraryForm from "../LibraryForm/LibraryForm";

import LibraryList from "../Library/LibraryList/LibraryList";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/books/booksOperations";

// import { getTrainingOperations } from "../../redux/training/trainingOperations";

// function App() {



function App() {
// const dispatch = useDispatch()
//   useEffect(() => {
//      dispatch(getUsersBooksOperation());    
// }, [dispatch]);

  const jwt = useSelector(fetchToken);
  token.set(jwt);
  return (
    <div className="App">
      
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
