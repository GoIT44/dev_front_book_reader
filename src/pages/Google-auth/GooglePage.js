import { useLocation } from "react-router-dom";
import { token } from "../../services/auth";

const GooglePage = () => {
  const location = useLocation();
  const tokens = location.search.slice(1).split("=")[1];
  console.log(tokens);
  token.set(tokens);
  return <div>{tokens}</div>;
};
export default GooglePage;
