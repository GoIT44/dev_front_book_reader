
import Routes from "../../navigation/Routes";
import Navbar from "../Navbar";

import { useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";
import { token } from "../../services/auth";

import "./App.css";


function App() {
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
