import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/Routes/PrivateRoutes";
import PublicRoute from "../components/Routes/PublicRoutes";
import InfoPage from "../pages/InfoPage";
import useMedia from "../components/hooks";
import GooglePage from "../pages/Google-auth/GooglePage";
import LibraryPage from "../pages/library/LibraryPage";
import StatisticPage from "../pages/StatisticPage/StatisticPage";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const Routes = () => {
  const isMobile = useMedia.useMedia().MOB;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {isMobile ? (
          <PublicRoute restricted exact path="/">
            <InfoPage />
          </PublicRoute>
        ) : (
          <PublicRoute restricted exact path="/">
            <RegisterPage />
          </PublicRoute>
        )}
        <PublicRoute restricted exact path="/register" redirectTo="/login">
          <RegisterPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/login" redirectTo="/library">
          <LoginPage />
        </PublicRoute>
        <PublicRoute path="https://breader.netlify.app/google-auth">
          <GooglePage />
        </PublicRoute>
        <PrivateRoute exact path="/library" redirectTo="/login">
          <LibraryPage />
        </PrivateRoute>
        <PrivateRoute exact path="/statistic" redirectTo="/login">
          <StatisticPage />
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};
export default Routes;
