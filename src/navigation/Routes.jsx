import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/Routes/PrivateRoutes";
import PublicRoute from "../components/Routes/PublicRoutes";
import InfoPage from "../pages/InfoPage";
import useMedia from "../components/hooks";
import GooglePage from "../pages/Google-auth/GooglePage";
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
        <PublicRoute restricted exact path="/login">
          <LoginPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/google-auth">
          <LoginPage />
        </PublicRoute>
        <PublicRoute path="http://localhost:3000/google-auth1/">
          <GooglePage />
        </PublicRoute>
        {/* <PrivateRoute exact path="/" redirectTo="/login">
         <></>
        </PrivateRoute>
        <PrivateRoute exact path="" redirectTo="/login">
        <></>
        </PrivateRoute> */}
        {/* <Route path="/statistic">
          <StatisticPage />
        </Route> */}
        {/* <PrivateRoute path="/training"> */}
          {/* {isTraining ? <StatisticPage/> : <TrainingPage/>} */}
          {/* <TrainingPage/>> */}
        {/* </PrivateRoute> */}
      </Switch>
    </Suspense>
  );
};
export default Routes;
