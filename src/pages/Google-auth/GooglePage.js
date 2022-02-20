import { useLocation } from "react-router-dom";
import { token } from "../../services/auth";

const GooglePage = () => {
  const location = useLocation();
  const tokens = location.search.slice(1).split("=")[1];
  token.set(tokens);
  return <></>;
};
export default GooglePage;
