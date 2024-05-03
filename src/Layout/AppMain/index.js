import { Route, Redirect, useLocation } from "react-router-dom";
import React, { Suspense, lazy, Fragment, useState } from "react";
import Loader from "react-loaders";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../pages/UserPages/Loading";
import Config from "../../config";
import { setOtherLocalStorage, setAdminLocalStorage } from "../../utils/Auth";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthService from "../../services/AuthService";

const LoginPage = lazy(() => import("../../pages/UserPages/Login"));
const Dashboards = lazy(() => import("../../pages/Dashboards"));

const AppMain = () => {
  const location = useLocation();

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const history = useHistory();
  const accessToken = localStorage.getItem("access_token");

  if (!isAuthenticated && accessToken) {
    localStorage.removeItem("access_token");
  } else if (isAuthenticated && !accessToken) {
    getAccessTokenSilently({
      // audience: `https://${Config.REACT_DOMAIN}/api/v2/`,
      audience: `https://backend.kzoom.app`,
      scope: "admin openid profile email",
    })
      .then((token) => {
        setAdminLocalStorage(token);
        // const userDetailsByIdUrl = `https://backend.kzoom.app/users/${user.sub}`;

        // fetch(userDetailsByIdUrl, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }).then((res) =>  {
        // AuthService.getToken().then(res => {
        //   console.log(res)
        //   // setAdminLocalStorage(res);
        //   // history.push("/");
        // });
        // // console.log(res)
        // setAdminLocalStorage();
        history.push("/");
        // });
      })
      .catch((error) => console.error(error));
  }

  const redirectUrl = isAuthenticated ? "/admin/analytics" : "/pages/login";

  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="line-scale-party" />
              </div>
              <h6 className="mt-3">
                Please wait while we load all the Pages examples
                <small>
                  Because this is a demonstration we load at once all the Pages
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/pages/login" component={LoginPage} />
      </Suspense>

      {/* Dashboards */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-grid-cy" />
              </div>
              <h6 className="mt-3">
                Please wait while we load all the Dashboards examples
                <small>
                  Because this is a demonstration, we load at once all the
                  Dashboards examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        {/* <Route path="/admin" render={(props) => <Dashboards user={user}/>} /> */}
        <Route path="/admin" component={Dashboards} />
      </Suspense>

      <Route exact path="/" render={() => <Redirect to={redirectUrl} />} />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
