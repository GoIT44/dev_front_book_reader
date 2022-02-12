import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/Routes/PrivateRoutes";
import PublicRoute from "../components/Routes/PublicRoutes";
import InfoPage from "../pages/InfoPage";
import useMedia from "../components/hooks";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const Routes = () => {
  const isMobile = useMedia.useMedia().MOB;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {isMobile && (
          <PublicRoute restricted exact path="/">
            <InfoPage />
          </PublicRoute>
        )}
        <PublicRoute restricted exact path="/register" redirectTo="/login">
          <RegisterPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/login">
          <LoginPage />
        </PublicRoute>
        {/* <PrivateRoute exact path="/" redirectTo="/login">
         <></>
        </PrivateRoute>
        <PrivateRoute exact path="" redirectTo="/login">
        <></>
        </PrivateRoute> */}
      </Switch>
    </Suspense>
  );
};
export default Routes;
