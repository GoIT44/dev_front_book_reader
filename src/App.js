import "./App.css";
import Routes from "./navigation/Routes";
import Navbar from "./components/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchToken } from "./redux/auth/auth-selectors";
// import { token } from "./shared/services/auth";
import { useEffect } from "react";
// import authOperations from "./redux/auth/auth-operations";

function App() {
  // const jwt = useSelector(fetchToken);
  // token.set(jwt);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(authOperations.CheckedIsLoginCurrentUser(token))
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
