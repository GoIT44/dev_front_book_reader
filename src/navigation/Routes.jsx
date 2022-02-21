import { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/Routes/PrivateRoutes";
import PublicRoute from "../components/Routes/PublicRoutes";
import InfoPage from "../pages/InfoPage";
import useMedia from "../components/hooks";
import GooglePage from "../pages/Google-auth/GooglePage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import StatisticPage from "../pages/StatisticPage/StatisticPage";
import TrainingPage from "../pages/TrainingPage/TrainingPage";
import {useDispatch, useSelector} from 'react-redux';
import {getTraining} from '../redux/training/trainingSelectors';
import { fetchToken } from "../redux/auth/auth-selectors";
import { getTrainingOperations } from "../redux/training/trainingOperations";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const Routes = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(fetchToken);
  useEffect(() => {
      isAuth && dispatch(getTrainingOperations());
  },[dispatch])

  const isMobile = useMedia.useMedia().MOB;
  const isTraining = useSelector(getTraining);
  console.log(isTraining)
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
          {isTraining ? <StatisticPage /> : <TrainingPage/>}
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};
export default Routes;