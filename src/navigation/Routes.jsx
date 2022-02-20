import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/Routes/PrivateRoutes";
import PublicRoute from "../components/Routes/PublicRoutes";
import InfoPage from "../pages/InfoPage";
import useMedia from "../components/hooks";
import GooglePage from "../pages/Google-auth/GooglePage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import StatisticPage from "../pages/StatisticPage/StatisticPage";
import TrainingPage from "../pages/TrainingPage/TrainingPage";

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
        <PublicRoute path="/google-auth" redirectTo="/library">
          <GooglePage />
        </PublicRoute>
        <PrivateRoute exact path="/library" redirectTo="/login">
          <LibraryPage />
        </PrivateRoute>
        {/* <PrivateRoute path="/training"> */}
          {/* {isTraining ? <StatisticPage/> : <TrainingPage/>} */}
          {/* <TrainingPage/>> */}
        {/* </PrivateRoute> */}
        <PrivateRoute exact path="/statistic" redirectTo="/login">
          <StatisticPage />
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};
export default Routes;
