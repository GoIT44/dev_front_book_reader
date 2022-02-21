import { useLocation } from "react-router-dom";
import auth from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const GooglePage = () => {
  const location = useLocation();
  const tokens = location.search.slice(1).split("=")[1];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth.googleAuth({ token: tokens }));
  }, [dispatch, tokens]);
  return <></>;
};
export default GooglePage;
